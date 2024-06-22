import { Request, Response } from "express";
import { validationResult } from "express-validator";
import logger from "../../../utils/Logger/Logger";
import User from "../../models/User/User.model";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import Token from "../../models/Token/Token.model";
import validationRules from "../Validation/validations.controller";
import * as fs from "fs";
import path from "path";

class Register {
  public async RegisterUser(req: Request, res: Response): Promise<void> {
    await Promise.all(
      validationRules.registrationValidationRules.map((rule) => rule.run(req))
    );
    const { username, email, password, first_name, last_name, role } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      logger.error(
        `Erros de validação no Register ${errorMessages.join(", ")}`
      );
      res
        .status(400)
        .send(`Erros de validação no Register ${errorMessages.join(", ")}`);
      return;
    }

    let existingUserByUsername;
    let existingUserByEmail;

    try {
      existingUserByUsername = await User.findOne({
        where: { username: username },
      });
      existingUserByEmail = await User.findOne({ where: { email: email } });
    } catch (err) {
      logger.error("Erro ao consultar o banco de dados: " + err);
      res.status(500).send("Erro ao consultar o banco de dados");
      return;
    }

    if (existingUserByUsername) {
      logger.error("Nome de usuário já em uso");
      res.status(400).send("Nome de usuário já em uso");
      return;
    } else if (existingUserByEmail) {
      logger.error("Email já em uso");
      res.status(400).send("Email já em uso");
      return;
    }

    try {
      if (process.env.SALTROUNDS_SECRET) {
        const saltRounds = parseInt(process.env.SALTROUNDS_SECRET);
    
        const hash = await bcrypt.hash(password, saltRounds);
    
        const user = await User.create({
          username: username,
          password: hash,
          email: email,
          first_name: first_name,
          last_name: last_name,
          role: role,
        });
    

        const user_id = user.dataValues.userid;

        
        const uploadDir = path.join(
          __dirname,
          `../../../../uploads/${user_id}/perfil`
        );

        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        const secret = process.env.SECRET;
        if (!secret) {
          logger.error("Secret key não está definida");
          res.status(500).send("Secret key não está definida");
          return;
        }

        const token = jwt.sign({ id: user_id }, secret);

        const newToken = new Token({ user_id, token });

        newToken.createdAt = new Date();
        newToken.updatedAt = new Date();

        await newToken.save().then(() => {
          logger.info("Cadastrado com Sucesso");
          res.status(201).json({ id: user_id, token });
        });
      }
    } catch (err) {
      logger.error("Erro ao inserir dados no banco de dados: " + err);
      res.status(500).send("Erro ao inserir dados no banco de dados");
    }
  }
}

export default new Register();
