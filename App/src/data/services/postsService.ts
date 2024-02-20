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

const getPostsReq = async () => {
  const response = await getPosts();
  return response;
};

export const postsData = await getPostsReq();

console.log(postsData);
