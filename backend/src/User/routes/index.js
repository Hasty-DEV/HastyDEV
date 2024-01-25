const express = require("express");
const router = express.Router();

const registrationController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const sendEmailVerification = require("../emailVerify/sendEmailVerification");
const emailVerification = require("../emailVerify/controllers/emailVerifyController");
const sendPasswordResetEmail = require("../ResetPass/sendResetPassCode");
const resetPassword = require("../ResetPass/controllers/ResetPassController");
const contactFormValidationRules = require ("../contactForm/validations/contactFormValidation");
const handleContactForm = require ("../contactForm/controllers/contactFormController");
const verifyToken = require ("../token/verifyToken");
const deleteAccountController = require ("../delete-account/controllers/delete-accountController");


// Rota de registro
router.post("/register", registrationController.registrationValidationRules, registrationController.register);

// Rota de login
router.post("/login", loginController.login);

// Rota protegida de usuário
router.get("/user/:id",  verifyToken, userController.getUserById);

// Rota de atualização de token
router.post("/refresh-token", authController.checkRefreshToken, (req, res) => {
  const accessToken = authController.createJwt(req.userId);
  res.status(200).json({ accessToken });
});

// Rota para enviar email de verificação
router.post('/sendEmailVerification', sendEmailVerification);

// Rota para verificar o PIN de email
router.post('/emailVerification', emailVerification);

// Rota para enviar email de redefinição de senha
router.post('/sendPasswordResetEmail', sendPasswordResetEmail);

// Rota para redefinir a senha
router.post('/resetPassword', resetPassword.resetPasswordValidationRules, resetPassword.resetPassword);

// Rota para exclusão de conta
router.delete('/deleteAccount/:userId', verifyToken, deleteAccountController.deleteAccount);

// Rota do formulário de contato
router.post('/contactForm', contactFormValidationRules, handleContactForm);

// Rota do Newsletter 
router.post('/subscribeNewsletter', (req, res) => {
  const { email } = req.body;
  
res.json({ 
  success: true, 
  message: 'Inscrição na newsletter realizada com sucesso!' });
});

module.exports = router;
