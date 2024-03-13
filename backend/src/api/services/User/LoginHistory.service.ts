import { Op } from "sequelize";
import LoginHistoryModel from "../../models/LoginHistory/LoginHistory.model";
import logger from "../../../utils/Logger/Logger";

const LoginHistory = async (userid: number) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  try {
    const existingRecord = await LoginHistoryModel.findOne({
      where: {
        userid,
        login_date: {
          [Op.gte]: today,
        },
      },
    });

    if (!existingRecord) {
      await LoginHistoryModel.create({
        login_date: new Date(),
        userid,
      } as any);
    }
  } catch (error) {
    logger.error("Erro ao registrar histórico de login:", error);
  }
};

export default LoginHistory;
