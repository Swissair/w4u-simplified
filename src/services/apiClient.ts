import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://localhost:7229/api/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default apiClient;

export interface ApiResponse<T> {
  data: T;
  status: string;
}
