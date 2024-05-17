import ItemService from "../../services/Search/Search";
import { Request, Response } from "express";

class Items {
    public async searchItems(req: Request, res: Response) {
        const searchTerm: string = req.query.searchTerm as string;

        try {
            const items = await ItemService.searchItems(searchTerm);
            res.json(items);
        } catch (error) {
            res.status(500).json({ error: "Erro ao pesquisar itens: " + error });
        }
    }
}

export default new Items();