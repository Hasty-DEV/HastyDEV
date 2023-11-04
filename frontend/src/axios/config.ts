import axios from "axios";

const URL = "http://localhost";
const PORT = "5000"

export const FormFetch = axios.create({
  baseURL: `${URL}:${PORT}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useApi = () =>({
  validateToken : async (token: string) =>{
    const response = await axios.post('/validate', {token});
    return response.data;
  },
  signin: async (username: string, password: string) => {
    const response = await FormFetch.post('/login', { username, password });

     axios.defaults.headers.authorization = `Bearer ${response.data.token}`;

    return response.data;
  },
  logout: async () => {
    
    const response = await axios.post('/logout');
     axios.defaults.headers.authorization = null;
    return response.data;

  }
});
