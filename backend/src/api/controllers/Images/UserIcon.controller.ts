import { Request, Response } from "express";
import multer from "multer";
import { uploadPerfilIcon } from "../../../config/multer/multer";
import * as path from "path";
import * as fs from "fs";
import sharp from "sharp";
import logger from "../../../utils/Logger/Logger";

class UserIconController {
  public async setUserIcon(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const uploadDir = path.join(
        __dirname,
        `../../../../uploads/${userId}/perfil`
      );

     
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

     
      const files = fs.readdirSync(uploadDir);
      const userIconFile = files.find((file) => file.startsWith("unprocessed_userIcon"));
      if (userIconFile) {
         
        fs.unlinkSync(path.join(uploadDir, userIconFile));
      }

      
      uploadPerfilIcon.single("unprocessed_userIcon")(req, res, async (err: any) => {
        if (err instanceof multer.MulterError) {
          logger.error("Erro do Multer: " + err, res);
          res.status(400).send("Erro ao fazer o upload do arquivo");
        } else if (err) {
          logger.error("Erro: " + err, res);
          res.status(500).send("Ocorreu um erro interno");
        } else {
          if (req.file) {
            const processedImagePath = path.join(
              uploadDir,
              "userIcon.jpg" 
            );
            await sharp(req.file.path)
              .resize(200, 200)  
              .jpeg({ quality: 70 })  
              .toFile(processedImagePath);  

    
            fs.unlinkSync(req.file.path);

            logger.info("Arquivo enviado com sucesso: " + req.file, res);
            res.status(200).send("Arquivo enviado com sucesso");
          } else {
            logger.error("Nenhum arquivo foi enviado", res);
            res.status(400).send("Nenhum arquivo foi enviado");
          }
        }
      });
    } catch (error) {
      logger.error("Erro ao configurar o upload do ícone do usuário: " + error, res);
      res
        .status(500)
        .send("Ocorreu um erro interno ao configurar o upload do ícone do usuário");
    }
  }

  public async getUserIcon(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const uploadDir = path.join(
        __dirname,
        `../../../../uploads/${userId}/perfil`
      );
  
     
      if (!fs.existsSync(uploadDir)) {
        logger.error("Diretório de perfil não encontrado", res);
        res.status(404).send("Diretório de perfil não encontrado");
        return;
      }
  
      const files = fs.readdirSync(uploadDir);
  
      const userIconFile = files.find((file) => file.startsWith("userIcon"));
  
      if (!userIconFile) {
        logger.error("Ícone do usuário não encontrado", res);
        res.status(404).send("Ícone do usuário não encontrado");
        return;
      }
  
      const iconPath = path.join(uploadDir, userIconFile);
  
      res.sendFile(iconPath);
    } catch (error) {
      logger.error("Erro ao obter o ícone do usuário: " + error, res);
      res
        .status(500)
        .send("Ocorreu um erro interno ao obter o ícone do usuário");
    }
  }
  
}

export default new UserIconController();
