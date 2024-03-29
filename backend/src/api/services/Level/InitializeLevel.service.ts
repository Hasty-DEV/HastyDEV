import LevelModel from "../../models/Level/Level.model";
import logger from "../../../utils/Logger/Logger";

export const InitializeLevel = async (userid: number) => {
  try {
    const existingUser = await LevelModel.findOne({ where: { userid } });
    if (existingUser) {
      logger.info("O usuário já tem uma entrada na tabela Level.");
      return;
    }
    await LevelModel.create({
      userid: userid,
      exp: 0,
      level: 0,
      expNeeded: 0,
    });
  } catch (error) {
    logger.error("Erro ao inicializar o nível do usuário: " + error);
  }
};
