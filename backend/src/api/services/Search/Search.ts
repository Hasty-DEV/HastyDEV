import { QueryTypes } from "sequelize";
import { sequelize } from "../../../loaders/sequelize/sequelize";

class ItemService {
  static async searchItems(searchTerm: string) {
    const query = `
      SELECT * FROM posts
      WHERE programmingLanguages LIKE ?
    `;

    const searchValue = `%${searchTerm}%`;

    try {
      const results = await sequelize.query(query, {
        replacements: [searchValue],
        type: QueryTypes.SELECT,
      });

      return results;
    } catch (err) {
      throw new Error("Error executing search query:" + err);
    }
  }
}

export default ItemService;
