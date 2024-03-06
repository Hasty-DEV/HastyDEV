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

  public async incrementExp(userid: number, exp: number): Promise<void> {
    const UserExp = await this.getUserExp(userid);
    const ExpToAdd = UserExp + exp;
    await LevelModel.incrementExp(userid, ExpToAdd);
    await this.HasUpgradedLevel(userid);
  }

  private async HasUpgradedLevel(userid: number): Promise<number | void> {
    const UserLevel = await this.getUserLevel(userid);
    let UserExp = await this.getUserExp(userid);
    let newLevel = UserLevel;

    while (UserExp > 0) {
      const expNeededToUpgrade = await this.expNeededToUpgrade(newLevel);
      if (UserExp >= expNeededToUpgrade) {
        UserExp -= expNeededToUpgrade;
        newLevel++;
      } else {
        break;
      }
    }

    if (newLevel > UserLevel) {
      await LevelModel.updateLevel(userid, newLevel);
      return newLevel;
    } else {
      return;
    }
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
