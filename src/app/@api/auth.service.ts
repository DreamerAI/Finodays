import axios from "axios";
import qs from "qs"; // Import the qs library for URL encoding
import { env } from "../../env";

const API_URL = `${env.BACK_API_URL}/api/user`;

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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      throw new Error(error.response?.data || "Error while making the request");
    }
  }
}

export default AuthService;
