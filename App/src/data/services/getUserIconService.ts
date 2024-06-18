import { CDN } from "./api";
import axios from "axios";
import DefaultUserIcon from "../../ui/assets/user/user_icon.png";

export const getUserIcon = async (): Promise<string | undefined> => {
  try {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      throw new Error("User ID not found in localStorage");
    }
    const url = `${CDN}/${userId}/perfil/userIcon.jpg`;

    const CACHED_URL = localStorage.getItem(`URL_${userId}`)

    if (CACHED_URL) return CACHED_URL;

    const response = await axios.get(url);

    localStorage.setItem(`URL_${userId}`, url);

    if (response.status === 200) {
      return url;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 404) {
        console.error(`User icon not found: ${error.response.statusText}`);
      } else {
        console.error("Error fetching user icon:", error.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    return DefaultUserIcon;
  }
};

export const getUserIconByID = async (userId: number | string) => {
  try {
    const userToken = await localStorage.getItem("userToken");

    if (userToken && userId) {
      api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
      const response = await api.get(`/userIconForPost/${userId}`, {
        responseType: "arraybuffer",
      });
      return {
        data: response.data,
        headers: response.headers,
      };
    }
  } catch (error) {
    console.error("Erro ao pegar dados de Usuário:", error);
    throw error;
  }
};
