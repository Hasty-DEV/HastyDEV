import { api } from "./api";

export const getPosts = async () => {
  try {
    const userToken = await localStorage.getItem("userToken");

    if (userToken) {
      api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
      const response = await api.get(`/posts`);
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao pegar dados de Posts:", error);
    throw error;
  }
};

const fetchPosts = async () => {
  try {
    const response = await getPosts();
    return response;
  } catch (error) {
    console.error("Erro ao pegar dados de Posts:", error);
    throw error;
  }
};

export const postsData = async () => {
  try {
    const posts = await fetchPosts();
    return posts;
  } catch (error) {
    console.error("Erro ao atribuir dados de posts:", error);
    throw error;
  }
};