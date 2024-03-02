import LevelModel from "../../models/Level/Level.model";

export const UserExp = async (userid: number): Promise<number | null> => {
  try {
    const userExp = await LevelModel.findOne({
      where: { userid: userid },
      attributes: ["exp"],
    });

    return userExp ? userExp.exp : null;
  } catch (error) {
    console.error("Erro ao obter a experiência do usuário:", error);
    return null;
  }
};
