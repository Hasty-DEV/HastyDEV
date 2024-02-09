import { Router } from "express";
import LoginController from "../api/controllers/User/Login.controller";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Bem-Vindo a HastyDEV API");
});

//Rotas de Autenticação
routes.post("/login", LoginController.login);
routes.post("/register");

export default routes;
