import { validationResult } from "express-validator";
import { Request, Response } from "express";
import logger from "../../../utils/Logger/Logger";
import Answer from "../../models/Awnsers/Awnsers.model";
import Comment from "../../models/Commets/Commets.model";

class AnswersController {
  // Método para criar uma nova resposta para um comentário específico
  public async createAnswerForComment(req: Request, res: Response): Promise<void> {
    const { commentid } = req.params;
    const { userid, content } = req.body;

    if (!userid || !content || isNaN(parseInt(commentid))) {
      res.status(400).json({ error: "Requisição Incompleta ou Inválida" });
      return;
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      logger.error("Erros de validação na resposta", { errors: errors.array() });
      res.status(400).json({ errors: errors.array() });
      return;
    }

    // Cria a resposta de comentário no banco de dados
    try {
      await Answer.create({
        commentid: parseInt(commentid),
        userid,
        content,
      });

      logger.info("Resposta Criada com Sucesso!");
      res.status(201).json("Resposta Criada com Sucesso!");
    } catch (error: any) {
      logger.error("Erro ao criar resposta:", { error: error.message });
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }

  // Método para buscar todas as respostas para um comentário específico
  public async getAllAnswersForComment(req: Request, res: Response): Promise<void> {
    const { commentid } = req.params;

    try {
      const answers = await Answer.findAll({
        where: { commentid },
      });

      logger.info("Respostas encontradas com sucesso!");
      res.status(200).json(answers);
    } catch (error: any) {
      logger.error("Erro ao buscar respostas:", { error: error.message });
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }
}

export default new AnswersController();
