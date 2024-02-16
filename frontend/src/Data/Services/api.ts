import axios from "axios";

let baseURL = import.meta.env.VITE_API_URL;

// Criando a instância do axios com a URL base configurada
export const api = axios.create({ baseURL });
