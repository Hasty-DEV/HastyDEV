import { Request, Response } from "express";
import multer from "multer";
import { uploadFiles } from "../../../config/multer/multer";  
import * as path from "path";
import * as fs from "fs";
import logger from "../../../utils/Logger/Logger";

class FilesPostController {
  public async createPost(req: Request, res: Response): Promise<void> {
    try {
       const formData = req.body;
      const userId = req.params.id;
      const postId = req.params.postId

         const uploadDir = path.join(
        __dirname,
        `../../../../uploads/${userId}/posts/${postId}`
      );

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

       uploadFiles.array("files")(req, res, async (err: any) => {
        if (err instanceof multer.MulterError) {
        
          logger.error("Erro do Multer: "  + err, res, );
          res.status(400).send("Erro ao fazer o upload do arquivo");
        } else if (err) {
          logger.error("Erro: " + err, res);
          res.status(500).send("Ocorreu um erro interno");
        } else {
          const files = req.files as Express.Multer.File[];
          if (files && files.length > 0) {
             for (const file of files) {
              const filePath = path.join(uploadDir, file.originalname);
               fs.renameSync(file.path, filePath);
            }
            logger.info("Arquivos enviados com sucesso", res);
            res.status(200).send("Arquivos enviados com sucesso");
          } else {
            logger.error("Nenhum arquivo foi enviado", res);
            res.status(400).send("Nenhum arquivo foi enviado");
          }
        }
      });
    } catch (error) {
      logger.error("Erro ao processar o envio de arquivos: " + error, res);
      res
        .status(500)
        .send("Ocorreu um erro interno ao processar o envio de arquivos");
    }
  }

  public async getFiles(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.userid;
      const postId = req.params.postid;

      const uploadDir = path.join(
        __dirname,
        `../../../../uploads/${userId}/posts/${postId}`
      );

      if (fs.existsSync(uploadDir)) {
        const files = fs.readdirSync(uploadDir);
        res.status(200).json({ files });
      } else {
        logger.error("O diretório de upload não existe", res);
        res.status(404).send("O diretório de upload não existe");
      }
    } catch (error) {
      logger.error("Erro ao obter arquivos:", error, res);
      res.status(500).send("Ocorreu um erro interno ao obter arquivos");
    }
  }


  public async downloadFile(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.userId;
      const postId = req.params.postId;
      const fileName = req.params.fileName;
  
      const filePath = path.join(__dirname, `../../../../uploads/${userId}/posts/${postId}/${fileName}`);
  
      
      if (fs.existsSync(filePath)) {
     
        res.download(filePath);
      } else {
        res.status(404).send("Arquivo não encontrado");
      }
    } catch (error) {
      logger.error("Erro ao fazer o download do arquivo:", error);
      res.status(500).send("Ocorreu um erro interno ao fazer o download do arquivo");
    }
  }
  

 }

export default new FilesPostController();
