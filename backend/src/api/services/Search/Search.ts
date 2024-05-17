import { Op } from "sequelize";
import Search from "../../models/Search/Search.model";

class ItemService {
  static async searchItems(searchTerm: string) {
    const searchValue = `%${searchTerm}%`;

    try {
      const results = await Search.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: searchValue } },
            { subtitle: { [Op.like]: searchValue } },
            { content: { [Op.like]: searchValue } },
            { isPaid: true },
            { photos: { [Op.like]: searchValue } },
            { companyContent: { [Op.like]: searchValue } },
            { categories: { [Op.like]: searchValue } },
            { programmingLanguages: { [Op.like]: searchValue } },
          ],
        },
      });

      return results;
    } catch (err) {
      throw new Error("Error executing search query:" + err);
    }
  }
}

export default ItemService;
