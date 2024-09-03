import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState([""]);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      //clean up 1
      const controller = new AbortController();
      //before call api setLoading to true
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(
          endpoint,
          //clean up 2
          { signal: controller.signal, ...requestConfig }
        )
        .then((res) => {
          setData(res.data.results);
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
    },
    deps ? [...deps] : []
  );

  return { data, error, loading };
};

export default useData;
