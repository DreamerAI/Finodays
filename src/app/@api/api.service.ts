import axios from "axios";
import { env } from "../../env";

const API_URL = env.BACK_API_URL;

// Определение интерфейса для данных, отправляемых на API
interface ApiRequest {
  
  address: string;
  сonstructionYear: string;
  roomCnt: string;
  area: string;
  floor: string;
  renovationType: string;
  renovationYear: string;
  ceilingHeight: string;
  finishing: string;

  parking: boolean;
  park: boolean;
  school: boolean;
  kindergarten: boolean;
  metro: boolean;

  balcony: boolean;
  loggia: boolean;
  windows: boolean;
}

// Определение интерфейса для данных, получаемых от API
interface ApiResponse {
  // Укажите поля, которые ожидаете получить от вашего API в ответе на POST-запрос
  message: string;
  // ...
}

class ApiService {
  static async getMarketValue(data: ApiRequest): Promise<ApiResponse> {
    try {
      const token = localStorage.getItem("token");
      
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      
      const response = await axios.post<ApiResponse>(
        `${API_URL}/api/ml/predict`,
        data
      );
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

export default ApiService;