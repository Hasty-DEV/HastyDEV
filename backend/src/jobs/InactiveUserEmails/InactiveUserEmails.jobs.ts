import logger from '../../utils/Logger/Logger';
import { EnvVariables } from '../../config/env';
import { transport } from '../../loaders/nodemailer/nodemailer.loader';
import { sequelize } from '../../loaders/sequelize/sequelize';
import LoginHistoryModel from '../../api/models/LoginHistory/LoginHistory.model';
import User from '../../api/models/User/User.model';
import { Op } from 'sequelize';



const mail = EnvVariables.mail;

export const sendInactiveUserEmails = async () => {
    try {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        const inactiveUsers = await sequelize.query(`
            SELECT DISTINCT userid
            FROM LoginHistory
            WHERE login_date < '${thirtyDaysAgo.toISOString()}'
        `);
        
        for (const row of inactiveUsers[0] as any[]) {
            const userId = row.userid;
            const lastLogin = await LoginHistoryModel.findOne({
                where: {
                    userid: userId,
                    login_date: {
                        [Op.gte]: thirtyDaysAgo
                    }
                },
                order: [['login_date', 'DESC']]
            });
            
            if (!lastLogin) {
                const user = await User.findByPk(userId);
                
                if (user && user.email) {
                    const emailContent = `Olá ${user.first_name} ${user.last_name},\n\nVocê não fez login na nossa plataforma nos últimos 30 dias. Estamos sentindo sua falta! Faça login em nosso site para aproveitar os últimos recursos e atualizações.\n\nAtenciosamente,\nSua Equipe`;

                    await transport.sendMail({
                        from: mail.user,
                        to: user.email,
                        subject: 'Você está inativo na nossa plataforma',
                        text: emailContent,
                    });

                    logger.info(`E-mail enviado para usuário inativo com id ${userId}`);
                } else {
                    logger.warn(`Não foi possível enviar e-mail para o usuário inativo com id ${userId} pois o e-mail não está definido.`);
                }
            }
        }
    } catch (error) {
        console.error(error);
        logger.error('Erro ao enviar e-mails para usuários inativos');
    }
}
