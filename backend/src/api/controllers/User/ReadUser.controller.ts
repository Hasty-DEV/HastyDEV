import { Request, Response } from 'express';
import User from '../../models/User/User.model';
import UserPerfil from '../../models/UserPerfil/UserPerfil.model';
import logger from '../../../utils/Logger/Logger';
import { UserAttributesWithProfile } from '../../../types/User/User.type';

class ReadUser {
  public async getUserData(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    try {
      if (!userId) {
        logger.error('ID de usuário ausente na solicitação');
        res.status(400).json({ message: 'ID de usuário ausente na solicitação' });
        return;
      }

      const user = await User.findByPk(userId);
      if (!user) {
        logger.error('Usuário não encontrado');
        res.status(404).json({ message: 'Usuário não encontrado' });
        return;
      }

      const userPerfil = await UserPerfil.findOne({ where: { userId } });

      const userData: UserAttributesWithProfile = {
        ...user.toJSON(),
        userPerfil: userPerfil ? userPerfil.toJSON() : null,
      };

      res.status(200).json({ user: userData });
    } catch (error) {
      logger.error('Erro ao ler o usuário: ' + error);
      res.status(500).json({ message: 'Erro ao processar a solicitação' });
    }
  }
}

export default new ReadUser();
