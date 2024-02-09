import { Router } from "express";
import { login } from "../api/controllers/CRUD_users/Login.controller";
import { register } from "../api/controllers/CRUD_users/Register.controller";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Bem-Vindo a HastyDEV API");
});

//Rotas de Autenticação
routes.post("/register", register);
routes.post("/login", login);

export default routes;
