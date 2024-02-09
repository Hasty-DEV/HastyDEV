import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Token from "../models/Tokens.model";

const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { token, id } = req.body;

  // Verifica se o token e o ID foram fornecidos na solicitação
  if (!token || !id) {
    res.status(401).json({ message: "Token e ID não fornecidos" });
    return;
  }

  try {
    // Verifique se o token é válido e decodifique-o usando a chave secreta (process.env.SECRET)
    const decoded: any = jwt.verify(token, process.env.SECRET as string);

    // Verifica se o ID no corpo da solicitação corresponde ao ID decodificado do token
    if (id != decoded.id) {
      res.status(401).json({ message: "Token e ID não correspondem" });
      return;
    }

    // Consulte o token mais recente na tabela de tokens para o usuário
    const latestToken = await Token.findOne({
      where: { user_id: decoded.id },
      order: [["createdAt", "DESC"]],
    });

    // Verifica se o token mais recente foi encontrado no banco de dados
    if (!latestToken) {
      res
        .status(401)
        .json({ message: "Token não encontrado no banco de dados" });
      return;
    }

    // Verifica se o token no corpo da solicitação é igual ao token mais recente armazenado no banco de dados
    if (token !== latestToken.token) {
      res.status(401).json({ message: "Token inválido" });
      return;
    }

    // Verifica a data de criação do token
    const tokenCreationDate = latestToken.createdAt;
    const currentDate = new Date();

    // Verifica se o token tem mais de 7 dias (expirou)
    const tokenAgeInDays = Math.floor(
      (currentDate.getTime() - tokenCreationDate.getTime()) /
        (1000 * 60 * 60 * 24)
    );
    if (tokenAgeInDays > 7) {
      res.status(401).json({ message: "Token expirado" });
      return;
    }

    // Se todas as verificações forem bem-sucedidas, continue com a próxima função de middleware ou rota
    console.log("Token verificado com sucesso");
    next();
  } catch (error) {
    // Em caso de qualquer erro, retorne um status 401 (não autorizado) com uma mensagem
    res.status(401).json({ message: "Token inválido" });
    return;
  }
};

export { verifyToken };
