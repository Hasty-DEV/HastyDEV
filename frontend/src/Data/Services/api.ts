import axios from "axios";

const nodeEnv = import.meta.env.VITE_NODE_ENV;
let baseURL;

if (nodeEnv === "development") {
  baseURL = "http://localhost:3001/api";
} else if (nodeEnv === "production") {
  baseURL = import.meta.env.VITE_API_URL;
}

// Criando a instância do axios com a URL base configurada
export const api = axios.create({ baseURL });
