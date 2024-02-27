import { api } from "./api";

export const getUserIcon = async () => {
  try {
    const userId = await localStorage.getItem("userId");
    const userToken = await localStorage.getItem("userToken");

    if (userToken && userId) {
      api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
      const response = await api.get(`/userIcon/${userId}`, { responseType: 'arraybuffer' });
      return {
        data: response.data,
        headers: response.headers
      };
    }
  } catch (error) {
    console.error("Erro ao pegar dados de Usuário:", error);
    throw error;
  }
};