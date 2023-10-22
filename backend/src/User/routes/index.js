 const express = require("express");

const router = express.Router();

const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const sendVerificationEmail = require("../controllers/verify/sendEmailVerification");
const PinVerify = require("../controllers/verify/confirmEmailVerify")
 
// Rota de registro
router.post("/register", registerController.registrationValidationRules, registerController.register);

// Rota de login
router.post("/login", loginController.login);

// Rota protegida de usuário
router.get("/user/:id", authController.checkToken, userController.getUserById);

//Rota atualização token
router.post("/refresh-token", authController.checkRefreshToken, (req, res) => {
     const accessToken = authController.createJwt(req.userId);
    res.status(200).json({ accessToken });
  });

  // Rota para enviar email de verificação
router.post('/verify' ,sendVerificationEmail);

//rota para verificar o pin
router.post('/checkverify', PinVerify)

module.exports = router; 
