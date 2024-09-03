import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

//build a custom hook，so the whole app can use to fetch games
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([""]);

  useEffect(() => {
    //clean up 1
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>(
        "/games",
        //clean up 2
        { signal: controller.signal }
      )
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        //clean up 3
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    //clean up 4
    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
