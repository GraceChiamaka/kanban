import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const API_URL = process.env.REACT_APP_API_URL;

class BaseRequest {
  protected api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
    });
    this.attachInterceptors();
  }
  private attachInterceptors() {
    this.api.interceptors.request.use(async (req: AxiosRequestConfig) => {
      return req;
    });
  }
}
export default BaseRequest;
