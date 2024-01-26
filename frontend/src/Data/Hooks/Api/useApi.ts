import axios from "axios";
import { FormFetch } from "../../Services/axios/config";

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await axios.post("/validate", { token });
    return response.data;
  },
  signin: async (username: string, password: string) => {
    const response = await FormFetch.post("/login", { username, password });

    axios.defaults.headers.authorization = `Bearer ${response.data.token}`;

    return response.data;
  },
  logout: async () => {
    const response = await axios.post("/logout");
    axios.defaults.headers.authorization = null;
    return response.data;
  },
});
