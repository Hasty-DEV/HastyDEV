const express = require("express");
const router = express.Router();

const registrationController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const sendEmailVerification = require("../emailVerify/sendEmailVerification");
const emailVerification = require("../emailVerify/controllers/emailVerifyController");
const sendPasswordResetEmail = require("../ResetPass/sendResetPassCode");
const resetPassword = require("../ResetPass/controllers/ResetPassController");
const handleContactForm = require ("../contactForm/controllers/contactFormController");
const verifyToken = require ("../token/verifyToken");
const deleteAccountController = require ("../delete-account/controllers/delete-accountController");



// Rota de registro
router.post("/register", registrationController.registrationValidationRules, registrationController.register);

// Rota de login
router.post("/login", loginController.login);

// Rota para enviar email de verificação
router.post('/sendEmailVerification', sendEmailVerification);

// Rota para verificar o PIN de email
router.post('/emailVerification', emailVerification);

// Rota para enviar email de redefinição de senha
router.post('/sendPasswordResetEmail', sendPasswordResetEmail);

// Rota para redefinir a senha
router.post('/resetPassword', resetPassword.resetPasswordValidationRules, resetPassword.resetPassword);

// Rota do formulário de contato
router.post('/contactForm', handleContactForm.contactFormValidationRules, handleContactForm);

// Rota do Newsletter 
router.post('/subscribeNewsletter', (req, res) => {
  const { email } = req.body;
  
res.json({ 
  success: true, 
  message: 'Inscrição na newsletter realizada com sucesso!' });
});



// rotas protegidas 
router.use('/auth', verifyToken);

// Rota para exclusão de conta
router.delete('auth/deleteAccount/:userId', deleteAccountController.deleteAccount);

module.exports = router;
