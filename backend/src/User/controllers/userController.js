const User = require("../models/userModel");
const { logError } = require("../../utils/logger");

// Função de rota para buscar usuário por ID
async function getUserById(req, res) {
  const id = req.params.id;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      logError("Usuário não encontrado", res, 404);
    }

    res.status(200).json({ user });
  } catch (err) {
    logError("Erro ao buscar usuário:", res, 500);
  }
}

module.exports = {
  getUserById,
};
