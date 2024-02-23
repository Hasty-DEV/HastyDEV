import { validationResult } from "express-validator";
import { Request, Response } from "express";
import { logError } from "../../../utils/Logger/Logger";
import Answer from "../../models/Awnsers/Awnsers.model";
import Comment from "../../models/Commets/Commets.model"


class AnswersController {
  // Método para criar uma nova resposta para um comentário específico
  public async createAnswerForComment(req: Request, res: Response): Promise<void> {
    const { commentid } = req.params;
    const { userid, content } = req.body;

    if (!userid || !content) {
      res.status(400).json({ error: "Requisição Incompleta" });
      return;
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      logError("Erros de validação na resposta", res, 400);
      return;
    }
    
      // Cria a resposta de comentário no banco de dados
    try {
       await Answer.create({ 
        commentid: parseInt(commentid),
        userid,
        content,
      });

      res.status(201).json("Resposta Criada com Sucesso!");
    } catch (error) {
      console.error("Erro ao criar resposta:", error);
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
      res.status(200).json(answers);
    } catch (error) {
      console.error("Erro ao buscar respostas:", error);
      res.status(500).json({ error: "Erro Interno do Servidor" });
    }
  }
}

export default new AnswersController();