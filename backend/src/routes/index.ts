import { Router } from "express";
import LoginController from "../api/controllers/User/Login.controller";
import ReadUserController from "../api/controllers/User/ReadUser.controller";
import RegisterController from "../api/controllers/User/Register.controller";
import SendEmailVerificationController from "../api/controllers/Email/SendEmailVerification.controller";
import EmailCodeVerificationController from "../api/controllers/Email/EmailCodeVerification.controller";
import ContactFormController from "../api/controllers/Form/ContactForm.controller";
import SendResetPassVerificationController from "../api/controllers/ResetPass/SendResetPassVerification.controller";
import ResetPassCodeVerificationController from "../api/controllers/ResetPass/ResetPassCodeVerification.controller";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Bem-Vindo a HastyDEV API");
});

//Rotas de Autenticação
routes.post("/login", LoginController.login);
routes.post("/register", RegisterController.RegisterUser);

//User Data
routes.get("/user/:id", ReadUserController.getUserData);

// Rotas para verificar email
routes.post(
  "/sendEmailVerification",
  SendEmailVerificationController.sendEmail
);
routes.post(
  "/emailCodeVerification",
  EmailCodeVerificationController.codeVerification
);

// Rotas para resetar senha do usuario
routes.post(
  "/sendResetPassVerification",
  SendResetPassVerificationController.sendPasswordResetEmail
)
routes.post(
  "/resetPassCodeVerification",
 ResetPassCodeVerificationController.resetPassword
);

routes.post("/contactForm", ContactFormController.sendContactForm);
export default routes;
