import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState([""]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //clean up 1
    const controller = new AbortController();
    //before call api setLoading to true
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>(
        "/genres",
        //clean up 2
        { signal: controller.signal }
      )
      .then((res) => {
        setGenres(res.data.results);
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

  return { genres, error, loading };
};

export default useGenres;
