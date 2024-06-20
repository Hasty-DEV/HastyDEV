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

    public async getPostsByUserId(req: Request, res: Response) {
        const userId: string = req.params.id;

        try {
            const posts = await ItemService.getPostsByUserId(userId);
            res.json(posts);
        } catch (error) {
            res.status(500).json({ error: `Erro ao buscar posts do usuário com ID ${userId}: ` + error });
        }
    }
}

export default new Items();
