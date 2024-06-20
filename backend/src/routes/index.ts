import { Request, Response, Router } from "express";
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
import ReadUserBasicController from "../api/controllers/User/ReadUserBasic.controller";
import FilesPostController from "../api/controllers/Files/files.controller"
import LikesController from "../api/controllers/Posts/Likes.controller";
import ItemsController from "../api/controllers/Items/Items.controller";
import { EmailComments } from "../api/controllers/EmailComments/EmailComments.controller";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Bem-Vindo a HastyDEV API");
});

routes.post("/login", LoginController.login);

routes.post("/register", RegisterController.RegisterUser);

routes.get(
  "/user/:id",
  verifyTokenMiddleware.verifyTokenWithParam,
  ReadUserController.getUserData
);

routes.get(
  "/userbasic/:id",
  ReadUserBasicController.getUserBasicInfo
);

routes.put(
  "/user/:id",
  verifyTokenMiddleware.verifyTokenWithParam,
  UpdateUserController.updateUser
);

routes.post(
  "/sendEmailVerification",
  SendEmailVerificationController.sendEmail
);

routes.post(
  "/emailCodeVerification",
  EmailCodeVerificationController.codeVerification
);

routes.post(
  "/sendResetPassVerification",
  SendResetPassVerificationController.sendPasswordResetEmail
);

routes.post(
  "/resetPassCodeVerification",
  ResetPassCodeVerificationController.resetPassword
);

routes.post("/contactForm", ContactFormController.sendContactForm);

routes.post(
  "/upload/:id",
  verifyTokenMiddleware.verifyTokenWithIdAndTokenInHeaders,
  UserIconController.setUserIcon
);

routes.post(
  "/upload-files/:id/:postId",
  verifyTokenMiddleware.verifyTokenWithIdAndTokenInHeaders,
  FilesPostController.createPost
);

routes.get(
  "/get-files/:userid/:postid",
  verifyTokenMiddleware.verifyTokenWithOnlyToken,
  FilesPostController.getFiles
);

routes.get("/download/:userId/:postId/:fileName", verifyTokenMiddleware.verifyTokenWithOnlyToken, FilesPostController.downloadFile);

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

routes.post(
  "/save-Likes",
  verifyTokenMiddleware.verifyTokenWithBody,
  LikesController.saveLike
)

routes.post(
  "/has-liked",
  verifyTokenMiddleware.verifyTokenWithBody,
  LikesController.hasLiked
)

routes.post(
  "/remove-like",
  verifyTokenMiddleware.verifyTokenWithBody,
  LikesController.removeLike
)

routes.get(
  "/comments/:postid",
  verifyTokenMiddleware.verifyTokenWithOnlyToken,
  CommetsController.getAllCommentsForPost
);
routes.post(
  "/comments/:postid",
  verifyTokenMiddleware.verifyTokenWithIdAndTokenInHeaders,
  CommetsController.createCommentForPost
);

routes.get(
  "/answers/:commentid",
  verifyTokenMiddleware.verifyTokenWithOnlyToken,
  AnswersController.getAllAnswersForComment
);

routes.post(
  "/answers/:commentid",
  verifyTokenMiddleware.verifyTokenWithOnlyToken,
  AnswersController.createAnswerForComment
);

routes.post('/comments-email', EmailComments);

routes.get("/items/search", ItemsController.searchItems);

routes.get("/items/search/:id", ItemsController.getPostsByUserId);

export default routes;
