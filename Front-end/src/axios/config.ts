import axios from "axios";

export const FormFetch = axios.create({
  baseURL: "https://hastydevapi.azurewebsites.net/",
  headers: {
    "Content-Type": "application/json",
  },
});
