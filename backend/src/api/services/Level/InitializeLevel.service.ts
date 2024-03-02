import LevelModel from "../../models/Level/Level.model";

export const InitializeLevel = async (userid: number) => {
  try {
    const existingUser = await LevelModel.findOne({ where: { userid } });
    if (existingUser) {
      console.log("O usuário já tem uma entrada na tabela Level.");
      return;
    }
    await LevelModel.create({
      userid: userid,
      exp: 0,
      level: 0,
    });
  } catch (error) {
    console.error("Erro ao inicializar o nível do usuário:", error);
    throw new Error("Erro ao inicializar o nível do usuário");
  }
};
