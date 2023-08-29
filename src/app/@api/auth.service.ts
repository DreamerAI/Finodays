import axios from "axios";
import qs from "qs"; // Import the qs library for URL encoding

const API_URL = "http://larek.itatmisis.ru:8000/api/user";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
}

class AuthService {
  static async login(data: LoginRequest): Promise<LoginResponse> {
    try {
      const requestData = qs.stringify(data); // Convert the data object to a URL-encoded string

      const response = await axios.post<LoginResponse>(`${API_URL}/token`, requestData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" // Set the content type header
        }
      });

      return response.data;
    } catch (error) {
      // @ts-ignore
      throw new Error(error.response?.data || "Error while making the request");
    }
  }
}

export default AuthService;
