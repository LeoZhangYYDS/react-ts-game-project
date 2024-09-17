import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e3a63a5d707b411299fc5f343880a3f9",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(config: AxiosRequestConfig) {
    const res = await axiosInstance.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  }

  async getOne(id: string | number) {
    const res = await axiosInstance.get<T>(this.endpoint + "/" + id);
    return res.data;
  }
}

export default APIClient;
