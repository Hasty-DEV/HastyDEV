import nodemailer from 'nodemailer';
import { EnvVariables } from '../../config/env';

const mail = EnvVariables.mail;

export const transport = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
        user: mail.user,
        pass: mail.password,
    },
});