import axios from "axios";

const URL = "http://localhost";
const PORT = "3001"

export const FormFetch = axios.create({
  baseURL: `${URL}:${PORT}`,
  headers: {
    "Content-Type": "application/json",
  },
});
