import axios from "axios";

// const URL = "http://localhost:3001";
const URL = "https://hastydevapi.onrender.com";

export const FormFetch = axios.create({
  baseURL: `${URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});
