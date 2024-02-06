const express = require("express");
const router = express.Router();

const registrationController = require("../controllers/CRUD_Users/register.controller");
const loginController = require("../controllers/CRUD_Users/login.controller");
const sendEmailVerification = require("../controllers/email_verify/send.email.verify.controller");
const emailVerification = require("../controllers/email_verify/email.verify.controller");
const sendPasswordResetEmail = require("../controllers/reset_pass/send.reset.pass.code.controller");
const resetPassword = require("../controllers/reset_pass/reset.pass.controller");
const handleContactForm = require ("../controllers/contact_form/contact.form.controller");
const verifyToken = require ("../controllers/protected_route/verify.token.controller");
const deleteAccountController = require ("../controllers/CRUD_users/delete.account.controller");



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
router.post('/contactForm', handleContactForm.contactFormValidationRules, handleContactForm.handleContactForm);

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
