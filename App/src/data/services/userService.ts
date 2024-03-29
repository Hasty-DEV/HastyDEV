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
