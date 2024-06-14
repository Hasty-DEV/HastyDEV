import { api } from "./api";

const cache_GETUSERDATA: { [key: string]: any } = {};

export const getUserData = async () => {
  try {
    const userId = await localStorage.getItem("userId");
    const userToken = await localStorage.getItem("userToken");

    if (userId && cache_GETUSERDATA[userId]) {
      return cache_GETUSERDATA[userId];
    }

    if (userToken && userId) {
      api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
      const response = await api.get(`/user/${userId}`);
      const userData = response.data.user;

      cache_GETUSERDATA[userId] = userData;

      return userData;
    }
  } catch (error) {
    console.error("Erro ao pegar dados de Usuário:", error);
  }
};

const cache_GETUSERDATABYID: { [key: string]: any } = {};

export const getUserDataById = async (userId: any) => {
  try {
    if (userId && cache_GETUSERDATABYID[userId]) {
      return cache_GETUSERDATABYID[userId];
    }

    if (userId) {
      const response = await api.get(`/userbasic/${userId}`);
      const userData = response.data.user;

      cache_GETUSERDATABYID[userId] = userData;

      return userData;
    } else {
      throw new Error("Token de usuário ou ID de usuário ausente");
    }
  } catch (error) {
    console.error("Erro ao pegar dados de Usuário:", error);
    throw error;
  }
};

const fetchUserData = async () => {
  try {
    const response = await getUserData();
    return response;
  } catch (error) {
    console.error("Erro ao pegar dados de Usuário:", error);
    throw error;
  }
};

export const UserDATA = async () => {
  try {
    const userData = await fetchUserData();
    return userData;
  } catch (error) {
    console.error("Erro ao atribuir dados de usuário:", error);
    throw error;
  }
};
