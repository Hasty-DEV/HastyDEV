import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { logError } from "../../../utils/Logger/Logger";
import User from "../../models/User/User.model";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import Token from "../../models/Token/Token.model";
import validationRules from "../Validation/ validations.controller";

class Register {
  public async RegisterUser(req: Request, res: Response): Promise<void> {

    await Promise.all(validationRules.registrationValidationRules.map(rule => rule.run(req)));
    const { username, email, password, first_name, last_name, role } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
      res.send(`Erros de validação no Register ${errorMessages.join(', ')}`);
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
      logError("Erro ao consultar o banco de dados: " + err, res, 500);
      return;
    }

    if (existingUserByUsername) {
      logError("Nome de usuário já em uso", res, 400);
      return;
    } else if (existingUserByEmail) {
      logError("Email já em uso", res, 400);
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

        const secret = process.env.SECRET;
        if (!secret) {
          logError("Secret key não está definida", res, 500);
          return;
        }

        const token = jwt.sign({ id: user_id }, secret);

        const newToken = new Token({ user_id, token });

        newToken.createdAt = new Date();
        newToken.updatedAt = new Date();

        await newToken.save().then(() => {
          console.log("Cadastrado com Sucesso");
          res.json({ id: user_id, token });
        });
      }
    } catch (err) {
      logError("Erro ao inserir dados no banco de dados: " + err, res, 500);
    }
  }
}

export default new Register();
