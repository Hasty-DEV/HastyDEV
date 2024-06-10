
import { Request, Response } from "express";
import Comment from "../../models/Commets/Commets.model";
import User from "../../models/User/User.model";
import Post from "../../models/Posts/Posts.model";
import { EnvVariables } from "../../../config/env";
import { transport } from "../../../loaders/nodemailer/nodemailer.loader";

const mail = EnvVariables.mail;

export const EmailComments = async (req: Request, res: Response) => {
    const { postid, userid, content } = req.body;

    try {
        const post = await Post.findByPk(postid, { include: [{ model: User, as: 'author' }] });

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const comment = await Comment.create({
            postid,
            userid,
            content,
        });

        const author = post.author;

        if (author && author.email) {
            const emailContent = `Olá ${author.first_name} ${author.last_name},\n\nSeu post recebeu um novo comentário:\n\n"${content}"\n\nAtenciosamente,\nSua Equipe`;

            await transport.sendMail({
                from: mail.user,
                to: author.email,
                subject: 'Novo comentário no seu post',
                text: emailContent,
            });
            console.log(emailContent)
        }

        res.status(201).json(comment, );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar comentário' });
    }
    
};
