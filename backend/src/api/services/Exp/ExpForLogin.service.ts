import LoginHistoryModel from "../../models/LoginHistory/LoginHistory.model";
import Level from "../Level/Level.service";
import logger from "../../../utils/Logger/Logger";
import { Response } from "express";

class ExpForLogin extends Level {
  public async VerifyAndIncrement(userid: number) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    try {
      const user = await LoginHistoryModel.findOne({
        where: {
          userid,
        },
        order: [["login_date", "DESC"]],
      });

      if (user) {
        if (!this.isSameDay(user.login_date, today)) {
          await this.incrementExpService(userid, 1);
        }
      }
    } catch (error) {
      logger.error(
        "Erro ao verificar e incrementar a experiência do usuário durante o login: " +
          error
      );
    }
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}

export default new ExpForLogin();
