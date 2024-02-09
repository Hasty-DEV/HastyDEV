import axios from "axios";

const nodeEnv = import.meta.env.VITE_NODE_ENV;
let URL;

if (nodeEnv === "development") {
  URL = "http://localhost:3001/api";
} else if (nodeEnv === "production") {
  URL = import.meta.env.VITE_API_URL;
}

export const FormFetch = axios.create({
  baseURL: `${URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});
