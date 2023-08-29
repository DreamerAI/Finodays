import axios, { AxiosResponse } from "axios";
import { TotalAreaChartModel } from "./model/analytics.model";
import { env } from "../../env";

const API_URL = `${env.BACK_API_URL}/api/flats/flats/graph`;

console.log(API_URL);

export interface AnalyticsRequest {
  region?: number;
  limit?: number;
  offset?: number;
}

export interface AnalyticsResponse {
  message: string;
  response: TotalAreaChartModel[];
}

class AnalyticsService {
  static async getTotalArea(request: AnalyticsRequest): Promise<AnalyticsResponse> {
    try {
      const token = localStorage.getItem("token");
      
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      
      const response: AxiosResponse<AnalyticsResponse> = await axios.get(`${API_URL}/price_vs_total_area`, {
        params: request,
      });
      return response.data;
    } catch (error) {
      throw new Error(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        error.response?.data?.message || "Ошибка при выполнении запроса"
      );
    }
  }

  static async getConstructionYear(request: AnalyticsRequest): Promise<AnalyticsResponse> {
    try {
      const token = localStorage.getItem("token");
      
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      
      const response: AxiosResponse<AnalyticsResponse> = await axios.get(`${API_URL}/price_vs_construction_year`, {
        params: request,
      });
      return response.data;
    } catch (error) {
      throw new Error(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        error.response?.data?.message || "Ошибка при выполнении запроса"
      );
    }
  }
}

export default AnalyticsService;
