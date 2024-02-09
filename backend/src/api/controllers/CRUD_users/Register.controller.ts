import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import User from "../../models/User.model";
// import Token from "../../models/Tokens.model";
import { registrationValidationRules } from "../validations/Validations.controller";
import { logError } from "../../../utils/Logger/Logger";

const saltRounds: number = parseInt(process.env.SALTROUNDS_SECRET || "");

async function register(req: Request, res: Response): Promise<void> {
  const { username, email, password, first_name, last_name } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    logError("Erros de validação no registro", res, 400);
    return;
  }

  let existingUserByUsername;
  let existingUserByEmail;

  try {
    // Verifica se o nome de usuário já está em uso
    existingUserByUsername = await User.findOne({
      where: { username: username },
    });

    // Verifica se o email já está em uso
    existingUserByEmail = await User.findOne({ where: { email: email } });
  } catch (err) {
    // Erro ao consultar o banco de dados
    logError("Erro ao consultar o banco de dados: " + err, res, 500);
    return;
  }

  if (existingUserByUsername) {
    // Nome de usuário já está em uso
    logError("Nome de usuário já em uso", res, 400);
    return;
  } else if (existingUserByEmail) {
    // Email já está em uso
    logError("Email já em uso", res, 400);
    return;
  }

  try {
    // Hash da senha para proteger
    const hash = await bcrypt.hash(password, saltRounds);

    // Inserir dados no banco de dados usando o modelo de usuário
    const user = await User.create({
      username: username,
      password: hash,
      email: email,
      first_name: first_name,
      last_name: last_name,
    });

    const user_id: number = user.dataValues.userid;

    const secret: string | undefined = process.env.SECRET;

    if (!secret) {
      logError("A chave secreta não foi configurada", res, 500);
      return;
    }

    const token: string = jwt.sign({ id: user_id }, secret);

    // const newToken = new Token({ user_id, token });
    // await newToken.save();
    console.log("Cadastrado com Sucesso");
    res.json({ id: user_id, token });
  } catch (err) {
    // Erro ao inserir dados no banco de dados
    logError("Erro ao inserir dados no banco de dados: " + err, res, 500);
  }
}

export { registrationValidationRules, register };
