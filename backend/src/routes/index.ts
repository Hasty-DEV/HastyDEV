import { Router } from "express";
import LoginController from "../api/controllers/User/Login.controller";
import ReadUserController from "../api/controllers/User/ReadUser.controller";
import RegisterController from "../api/controllers/User/Register.controller";
import SendEmailVerificationController from "../api/controllers/Email/SendEmailVerification.controller";
import EmailCodeVerificationController from "../api/controllers/Email/EmailCodeVerification.controller";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Bem-Vindo a HastyDEV API");
});

//Rotas de Autenticação
routes.post("/login", LoginController.login);
routes.post("/register", RegisterController.RegisterUser);

//User Data
routes.get("/user/:id", ReadUserController.getUserData);

// Rota para enviar email de verificação
routes.post(
  "/sendEmailVerification",
  SendEmailVerificationController.sendEmail
);
routes.post(
  "/emailCodeVerification",
  EmailCodeVerificationController.codeVerification
);
export default routes;
