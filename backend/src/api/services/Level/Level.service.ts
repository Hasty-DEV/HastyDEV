import LevelModel from "../../models/Level/Level.model";
import { UserExp } from "../../services/Exp/Exp.service";
import { UserLevel } from "./UserLevel.service";

abstract class Level extends LevelModel {
  public async getUserLevel(userid: number): Promise<any> {
    const Level = await UserLevel(userid);
    return Level;
  }

  public async getUserExp(userid: number): Promise<any> {
    const Exp = await UserExp(userid);
    return Exp;
  }

  public async incrementExpService(userid: number, exp: number): Promise<void> {
    const ExpToAdd = exp;
    await LevelModel.incrementExp(userid, ExpToAdd);
    await this.HasUpgradedLevel(userid);
  }

  private async HasUpgradedLevel(userid: number): Promise<number | void> {
    const UserLevel: number = await this.getUserLevel(userid);
    const UserExp: number = await this.getUserExp(userid);
    let NextLevel = UserLevel + 1;
    let expNeededToUpgrade: number = await this.expNeededToUpgrade(NextLevel);
    let newLevel = UserLevel;

    while (UserExp >= expNeededToUpgrade) {
      newLevel++;
      NextLevel++;
      expNeededToUpgrade = await this.expNeededToUpgrade(NextLevel);
    }

    expNeededToUpgrade = await this.expNeededToUpgrade(NextLevel);
    LevelModel.updateLevel(userid, newLevel);
    LevelModel.updateExpNeeded(userid, expNeededToUpgrade);
  }

  private async expNeededToUpgrade(level: number): Promise<any> {
    if (level < 7) {
      const expNeeded = Math.pow(2, level);
      return expNeeded;
    }
    if (level >= 7) {
      const expNeeded = Math.pow(2, level) - 4 * level;
      return expNeeded;
    }
  }
}

export default Level;