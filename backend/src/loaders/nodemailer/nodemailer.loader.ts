import nodemailer from 'nodemailer';
import { EnvVariables } from '../../config/env';

const mail = EnvVariables.mail;

export const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: mail.user,
        pass: mail.password,
    },
});