import axios, { AxiosResponse } from "axios";
import { AnalyticsModel } from "./model/analytics.model";

const API_URL = "http://larek.itatmisis.ru:8000/api/flats/flats/graph/price_vs_total_area";

export interface AnalyticsRequest {
  region?: number;
  limit?: number;
  offset?: number;
}

export interface AnalyticsResponse {
  message: string;
  response: AnalyticsModel[];
}

class AnalyticsService {
  static async getTotalArea(request: AnalyticsRequest): Promise<AnalyticsResponse> {
    try {
      const response: AxiosResponse<AnalyticsResponse> = await axios.get(API_URL, {
        params: request,
      });
      return response.data;
    } catch (error) {
      // @ts-ignore
      throw new Error(error.response?.data?.message || "Ошибка при выполнении запроса");
    }
  }
}

export default AnalyticsService;
