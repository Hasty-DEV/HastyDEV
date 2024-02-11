import { api } from "./api";

export const getUserData = async (userId: number | string): Promise<object> => {
  try {
    const response = await api.get(`/user/${userId}`);
    return response.data.user;
  } catch (error) {
    console.error("Erro ao pegar dados de Usuário:", error);
    throw error;
  }
};
