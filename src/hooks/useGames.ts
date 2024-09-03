import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

//build a custom hook，so the whole app can use to fetch games
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([""]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //clean up 1
    const controller = new AbortController();
    //before call api setLoading to true
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>(
        "/games",
        //clean up 2
        { signal: controller.signal }
      )
      .then((res) => {
        setGames(res.data.results);
        //called api ,get results, then setLoading to false
        setLoading(false);
      })
      .catch((err) => {
        //clean up 3
        if (err instanceof CanceledError) return;
        setError(err.message);
        //called api ,get error, then setLoading to false
        setLoading(false);
      });
    //clean up 4
    return () => controller.abort();
  }, []);

  return { games, error, loading };
};

export default useGames;
