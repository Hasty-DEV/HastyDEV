import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
export const CDN = import.meta.env.VITE_CDN_URL;

export const api = axios.create({ baseURL });
