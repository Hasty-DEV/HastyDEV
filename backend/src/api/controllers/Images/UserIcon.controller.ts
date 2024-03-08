import { Request, Response } from "express";
import multer from "multer";
import { uploadPerfilIcon } from "../../../config/multer/multer";
import * as path from "path";
import * as fs from "fs";
import sharp from "sharp";

class UserIconController {
  public async setUserIcon(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const uploadDir = path.join(
        __dirname,
        `../../../../uploads/${userId}/perfil`
      );

      // Verificar se o diretório existe, se não, criar
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Verificar se já existe um arquivo na pasta
      const files = fs.readdirSync(uploadDir);
      const userIconFile = files.find((file) => file.startsWith("unprocessed_userIcon"));
      if (userIconFile) {
        // Se um arquivo existir, exclua-o
        fs.unlinkSync(path.join(uploadDir, userIconFile));
      }

      // Prossiga com o upload do novo arquivo
      uploadPerfilIcon.single("unprocessed_userIcon")(req, res, async (err: any) => {
        if (err instanceof multer.MulterError) {
          console.log("Erro do Multer:", err);
          res.status(400).send("Erro ao fazer o upload do arquivo");
        } else if (err) {
          console.log("Erro:", err);
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

            // Excluir o arquivo original
            fs.unlinkSync(req.file.path);

            console.log("Arquivo enviado com sucesso:", req.file);
            res.status(200).send("Arquivo enviado com sucesso");
          } else {
            res.status(400).send("Nenhum arquivo foi enviado");
          }
        }
      });
    } catch (error) {
      console.error("Erro ao configurar o upload do ícone do usuário:", error);
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
      const files = fs.readdirSync(uploadDir);

      const userIconFile = files.find((file) => file.startsWith("userIcon"));

      if (!userIconFile) {
        res.status(404).send("Ícone do usuário não encontrado");
        return;
      }

      const iconPath = path.join(uploadDir, userIconFile);

      res.sendFile(iconPath);
    } catch (error) {
      console.error("Erro ao obter o ícone do usuário:", error);
      res
        .status(500)
        .send("Ocorreu um erro interno ao obter o ícone do usuário");
    }
  }
}

export default new UserIconController();
