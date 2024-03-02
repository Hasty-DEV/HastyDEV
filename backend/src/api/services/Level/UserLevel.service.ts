import LevelModel from "../../models/Level/Level.model";

export const UserLevel = async (userid: number): Promise<number | null> => {
  try {
    const userLevel = await LevelModel.findOne({
      where: { userid: userid },
      attributes: ["level"],
    });

    return userLevel ? userLevel.level : null;
  } catch (error) {
    console.error("Erro ao obter o nível do usuário:", error);
    return null;
  }
};
