import { Router } from "express";
import LoginController from "../api/controllers/User/Login.controller";
import ReadUserController from "../api/controllers/User/ReadUser.controller";
import RegisterController from "../api/controllers/User/Register.controller";
import SendEmailVerificationController from "../api/controllers/Email/SendEmailVerification.controller";
import EmailCodeVerificationController from "../api/controllers/Email/EmailCodeVerification.controller";
import ContactFormController from "../api/controllers/Form/ContactForm.controller";
import SendResetPassVerificationController from "../api/controllers/ResetPass/SendResetPassVerification.controller";
import ResetPassCodeVerificationController from "../api/controllers/ResetPass/ResetPassCodeVerification.controller";
import verifyTokenMiddleware from "../api/services/verify.token.middleware";
import UserIconController from "../api/controllers/Images/UserIcon.controller";
import PostController from "../api/controllers/Posts/Posts.controller";
import CommetsController from "../api/controllers/Commets/Comments.controller";
import AnswersController from "../api/controllers/Awnsers/Awnsers.controller";
import UpdateUserController from "../api/controllers/User/UpdateUser.controller";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Bem-Vindo a HastyDEV API");
});

// Rotas de Autenticação
routes.post("/login", LoginController.login);
routes.post("/register", RegisterController.RegisterUser);

// User Data
routes.get(
  "/user/:id",
  verifyTokenMiddleware.verifyTokenWithParam,
  ReadUserController.getUserData
);
routes.put(
  "/user/:id",
  verifyTokenMiddleware.verifyTokenWithParam,
  UpdateUserController.updateUser
);

// Rotas para verificar email
routes.post(
  "/sendEmailVerification",
  SendEmailVerificationController.sendEmail
);
routes.post(
  "/emailCodeVerification",
  EmailCodeVerificationController.codeVerification
);

// Rotas para resetar senha do usuário
routes.post(
  "/sendResetPassVerification",
  SendResetPassVerificationController.sendPasswordResetEmail
);
routes.post(
  "/resetPassCodeVerification",
  ResetPassCodeVerificationController.resetPassword
);

routes.post("/contactForm", ContactFormController.sendContactForm);

// Rotas protegidas por token
routes.post(
  "/upload",
  verifyTokenMiddleware.verifyTokenWithIdAndTokenInHeaders,
  UserIconController.setUserIcon
);

routes.get(
  "/userIcon/:id",
  verifyTokenMiddleware.verifyTokenWithParam,
  UserIconController.getUserIcon
);

routes.get(
  "/userIconForPost/:id",
  verifyTokenMiddleware.verifyTokenWithOnlyToken,
  UserIconController.getUserIcon
);

routes.get(
  "/posts",
  verifyTokenMiddleware.verifyTokenWithOnlyToken,
  PostController.getAllPosts
);

routes.post(
  "/posts",
  verifyTokenMiddleware.verifyTokenWithBody,
  PostController.createPost
);

routes.get(
  "/comments/:postid",
  verifyTokenMiddleware.verifyTokenWithOnlyToken,
  CommetsController.getAllCommentsForPost
);
routes.post(
  "/comments/:postid",
  CommetsController.createCommentForPost
);

routes.post(
  "/awnsers/:commentid",
  verifyTokenMiddleware.verifyTokenWithOnlyToken,
  AnswersController.createAnswerForComment
);

export default routes;
