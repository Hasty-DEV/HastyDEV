import { api } from "./api";

export const getUserData = async () => {
  try {
    const userId = await localStorage.getItem("userId");
    const userToken = await localStorage.getItem("userToken");

    if (userToken && userId) {
      api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
      const response = await api.get(`/user/${userId}`);
      return response.data.user;
    }
  } catch (error) {
    console.error("Erro ao pegar dados de Usuário:", error);
    throw error;
  }
};
