import axios from "axios";

let URL = import.meta.env.VITE_API_URL;

export const FormFetch = axios.create({
  baseURL: `${URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});
