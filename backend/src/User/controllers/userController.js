const pino = require("pino")();
const User = require('../models/userModel');  
 

// Função de rota para buscar usuário por ID
async function getUserById(req, res) {
  const id = req.params.id;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      pino.info("Usuário não encontrado");
      return res.status(404).json({ error: "Usuário não encontrado" });
    }


    res.status(200).json({ user });
  } catch (err) {
    pino.error("Erro ao buscar usuário:" + err);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}

module.exports = {
  getUserById,
};