import { Op } from "sequelize";
import LoginHistoryModel from "../../models/LoginHistory/LoginHistory.model";

const LoginHistory = async (userid: number) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

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
};

export default LoginHistory;
