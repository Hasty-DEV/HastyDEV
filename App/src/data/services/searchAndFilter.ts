
import { api } from "./api";

export const getPostsFilter = async (searchTerm: string) => {
   
    try {
      const userToken = await localStorage.getItem("userToken");
      
  
      if (userToken) {
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        const response = await api.get(`/items/search?searchTerm=${searchTerm}`);
        console.log("teste APi: "+searchTerm)
        return response.data;
        
      }
    } catch (error) {
      console.error("Erro ao pegar dados de Posts:", error);
      throw error;
    }
  };