import { Op } from "sequelize";
import Search from "../../models/Search/Search.model";

const searchItems = async (searchTerm: string) => {
  try {
    const posts = await Search.findAll({
      where: {
        [Op.or]: {
          title: {
            [Op.like]: `%${searchTerm}%`,
          },
          subtitle: {
            [Op.like]: `%${searchTerm}%`,
          },
          content: {
            [Op.like]: `%${searchTerm}%`,
          },
          companyContent: {
            [Op.like]: `%${searchTerm}%`,
          },
          categories: {
            [Op.like]: `%${searchTerm}%`,
          },
          programmingLanguages: {
            [Op.like]: `%${searchTerm}%`,
          },
        },
      },
    });
    
    return posts;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw error;
  }
};

export default { searchItems };
