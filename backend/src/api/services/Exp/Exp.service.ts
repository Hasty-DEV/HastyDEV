import LevelModel from "../../models/Level/Level.model";
import logger from "../../../utils/Logger/Logger";

export const UserExp = async (userid: number): Promise<number | null> => {
  try {
    const userExp = await LevelModel.findOne({
      where: { userid: userid },
      attributes: ["exp"],
    });

    return userExp ? userExp.exp : null;
  } catch (error) {
    logger.error("Erro ao obter a experiência do usuário: " + error);
    return null;
  }
};
