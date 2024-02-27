import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Token from "../models/Token/Token.model";

class TokenVerifier {
  public async verifyTokenWithParam(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const token = req.headers.authorization;
    const id = req.params.id;
    if (!token || !id) {
      console.error("Token e ID não fornecidos");
      return res.status(401).json({ message: "Token e ID não fornecidos" });
    }

    try {
      const tokenWithoutBearer = token.split(" ")[1];
      const decoded: any = jwt.verify(tokenWithoutBearer, process.env.SECRET!);
      if (id != decoded.id) {
        console.error("Token e ID não correspondem");
        return res.status(401).json({ message: "Token e ID não correspondem" });
      }

      const latestToken = await Token.findOne({
        where: { user_id: decoded.id },
        order: [["createdAt", "DESC"]],
      });

      if (!latestToken) {
        console.error("Token não encontrado no banco de dados");
        return res
          .status(401)
          .json({ message: "Token não encontrado no banco de dados" });
      }

      if (tokenWithoutBearer !== latestToken.token) {
        console.error("Token inválido");
        return res.status(401).json({ message: "Token inválido" });
      }

      const tokenCreationDate = latestToken.createdAt;
      const currentDate = new Date();
      const tokenAgeInDays = Math.floor(
        (currentDate.getTime() - tokenCreationDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );

      if (tokenAgeInDays > 7) {
        console.error("Token expirado");
        return res.status(401).json({ message: "Token expirado" });
      }

      console.info("Token verificado com sucesso");
      next();
    } catch (error) {
      console.error("Erro ao verificar o token:", error);
      return res.status(401).json({ message: "Token inválido" });
    }
  }
  public async verifyTokenWithBody(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id, token } = req.body;

    if (!token || !id) {
      console.error("Token e ID não fornecidos");
      return res.status(401).json({ message: "Token e ID não fornecidos" });
    }

    try {
      const tokenWithoutBearer = token.split(" ")[1];
      const decoded: any = jwt.verify(tokenWithoutBearer, process.env.SECRET!);
      if (id != decoded.id) {
        console.error("Token e ID não correspondem");
        return res.status(401).json({ message: "Token e ID não correspondem" });
      }

      const latestToken = await Token.findOne({
        where: { user_id: decoded.id },
        order: [["createdAt", "DESC"]],
      });

      if (!latestToken) {
        console.error("Token não encontrado no banco de dados");
        return res
          .status(401)
          .json({ message: "Token não encontrado no banco de dados" });
      }

      if (tokenWithoutBearer !== latestToken.token) {
        console.error("Token inválido");
        return res.status(401).json({ message: "Token inválido" });
      }

      const tokenCreationDate = latestToken.createdAt;
      const currentDate = new Date();
      const tokenAgeInDays = Math.floor(
        (currentDate.getTime() - tokenCreationDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );

      if (tokenAgeInDays > 7) {
        console.error("Token expirado");
        return res.status(401).json({ message: "Token expirado" });
      }

      console.info("Token verificado com sucesso");
      next();
    } catch (error) {
      console.error("Erro ao verificar o token:", error);
      return res.status(401).json({ message: "Token inválido" });
    }
  }

  public async verifyTokenWithOnlyToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const token = req.headers.authorization;

    if (!token) {
      console.error("Token não fornecido");
      return res.status(401).json({ message: "Token não fornecido" });
    }

    try {
      const tokenWithoutBearer = token.split(" ")[1];
      const latestToken = await Token.findOne({
        where: { token: tokenWithoutBearer },
        order: [["createdAt", "DESC"]],
      });

      if (!latestToken) {
        console.error("Token não encontrado no banco de dados");
        return res
          .status(401)
          .json({ message: "Token não encontrado no banco de dados" });
      }

      console.info("Token verificado com sucesso");
      next();
    } catch (error) {
      console.error("Erro ao verificar o token:", error);
      return res.status(401).json({ message: "Token inválido" });
    }
  }
  public async verifyTokenWithIdAndTokenInHeaders(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const id = req.headers.id as string | undefined;
    const token = req.headers.authorization;

    if (!token || !id) {
      console.error("Token e ID não fornecidos");
      return res.status(401).json({ message: "Token e ID não fornecidos" });
    }

    try {
      const tokenWithoutBearer = token.split(" ")[1];
      const decoded: any = jwt.verify(tokenWithoutBearer, process.env.SECRET!);
      if (id != decoded.id) {
        console.error("Token e ID não correspondem");
        return res.status(401).json({ message: "Token e ID não correspondem" });
      }

      const latestToken = await Token.findOne({
        where: { user_id: decoded.id },
        order: [["createdAt", "DESC"]],
      });

      if (!latestToken) {
        console.error("Token não encontrado no banco de dados");
        return res
          .status(401)
          .json({ message: "Token não encontrado no banco de dados" });
      }

      if (tokenWithoutBearer !== latestToken.token) {
        console.error("Token inválido");
        return res.status(401).json({ message: "Token inválido" });
      }

      const tokenCreationDate = latestToken.createdAt;
      const currentDate = new Date();
      const tokenAgeInDays = Math.floor(
        (currentDate.getTime() - tokenCreationDate.getTime()) /
          (1000 * 60 * 60 * 24)
      );

      if (tokenAgeInDays > 7) {
        console.error("Token expirado");
        return res.status(401).json({ message: "Token expirado" });
      }

      console.info("Token verificado com sucesso");
      next();
    } catch (error) {
      console.error("Erro ao verificar o token:", error);
      return res.status(401).json({ message: "Token inválido" });
    }
  }
}

export default new TokenVerifier();
