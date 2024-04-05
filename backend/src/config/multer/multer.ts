import multer from "multer";
import fs from "fs";
import path from "path";

const storagePerfilIcon = multer.diskStorage({
  destination: function (req, file, cb) {
    const userId = req.headers.id as string;
    const uploadPath = path.join("uploads", userId, "perfil");

    fs.mkdirSync(uploadPath, { recursive: true });

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname);
    cb(null, `unprocessed_userIcon${extension}`);
  },
});

export const uploadPerfilIcon = multer({ storage: storagePerfilIcon });

const storageFiles = multer.diskStorage({
  destination: function (req, file, cb) {
    const userId = req.headers.id as string;
    const uploadPath = path.join("uploads", userId, "posts");

    fs.mkdirSync(uploadPath, { recursive: true });

    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname);
    cb(null, `files${extension}`);
  },
});

export const uploadFiles = multer({ storage: storageFiles });
