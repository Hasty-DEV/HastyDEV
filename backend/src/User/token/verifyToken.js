const jwt = require('jsonwebtoken');
const Token = require('./tokensModel'); // Importe o modelo da tabela de tokens

const verifyToken = async (req, res, next) => {
  const { token, id } = req.body; // Suponha que o token e o ID sejam enviados no corpo da solicitação

  // Verifica se o token e o ID foram fornecidos na solicitação
  if (!token || !id) {
    return res.status(401).json({ message: 'Token e ID não fornecidos' });
  }

  try {
    // Verifique se o token é válido e decodifique-o usando a chave secreta (process.env.SECRET)
    const decoded = jwt.verify(token, process.env.SECRET); // Substitua 'seu_segredo_secreto' pelo seu segredo real

    // Verifica se o ID no corpo da solicitação corresponde ao ID decodificado do token
    if (id != decoded.id) {
      return res.status(401).json({ message: 'Token e ID não correspondem' });
    }
   
    // Consulte o token mais recente na tabela de tokens para o usuário
    const latestToken = await Token.findOne({
      where: { user_id: decoded.id },
      order: [['createdAt', 'DESC']], // Ordena por data de criação em ordem decrescente (último token)
    });

    // Verifica se o token mais recente foi encontrado no banco de dados
    if (!latestToken) {
      return res.status(401).json({ message: 'Token não encontrado no banco de dados' });
    }

    // Verifica se o token no corpo da solicitação é igual ao token mais recente armazenado no banco de dados
    if (token !== latestToken.token) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    // Verifique a data de criação do token
    const tokenCreationDate = latestToken.createdAt;
    const currentDate = new Date();

    // Verifica se o token tem mais de 7 dias (expirou)
    const tokenAgeInDays = Math.floor((currentDate - tokenCreationDate) / (1000 * 60 * 60 * 24));
    if (tokenAgeInDays > 7) {
      return res.status(401).json({ message: 'Token expirado' });
    }

    // Se todas as verificações forem bem-sucedidas, continue com a próxima função de middleware ou rota
    next();
  } catch (error) {
    // Em caso de qualquer erro, retorne um status 401 (não autorizado) com uma mensagem
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = verifyToken;
