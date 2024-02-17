import { Request, Response } from "express";
import multer from "multer";
import { upload } from "../../../config/multer/multer";

class UserIconController {
  public async setUserIcon(req: Request, res: Response): Promise<void> {
    upload.single("userIcon")(req, res, (err: any) => {
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
  }
}

export default new UserIconController();
