import { Request, Response } from "express";
import multer from "multer";
import { uploadPerfilIcon } from "../../../config/multer/multer";
import * as path from "path";
import * as fs from "fs";
class UserIconController {
  public async setUserIcon(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const uploadDir = path.join(
        __dirname,
        `../../../../uploads/${userId}/perfil`
      );
      // Verifique se já existe um arquivo na pasta
      const files = fs.readdirSync(uploadDir);
      const userIconFile = files.find((file) => file.startsWith("userIcon"));
      if (userIconFile) {
        // Se um arquivo existir, exclua-o
        fs.unlinkSync(path.join(uploadDir, userIconFile));
      }

      // Prossiga com o upload do novo arquivo
      uploadPerfilIcon.single("userIcon")(req, res, (err: any) => {
        if (err instanceof multer.MulterError) {
          console.log("Erro do Multer:", err);
          res.status(400).send("Erro ao fazer o upload do arquivo");
        } else if (err) {
          console.log("Erro:", err);
          res.status(500).send("Ocorreu um erro interno");
        } else {
          console.log("Arquivo enviado com sucesso:", req.file);
          res.status(200).send("Arquivo enviado com sucesso");
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
