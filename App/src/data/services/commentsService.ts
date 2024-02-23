import { api } from "./api";

// Define o tipo para a estrutura do comentário
interface Comment {
  // Defina aqui os campos necessários para o comentário
  commentId: number;
  userId: number;
  content: string;
  // ... outros campos
}

// Função assíncrona que obtém todos os comentários para um post específico
export const getAllCommentsForPost = async (postid: string): Promise<Comment[]> => {
  try {
    // Faz uma requisição GET para obter todos os comentários para o post específico
    const response = await api.get<Comment[]>(`/comments/${postid}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter comentários:", error);
    throw error;
  }
};

// Função assíncrona que cria um novo comentário para um post específico
export const createCommentForPost = async (
  postid: string,
  userid: number,
  content: string,
  token: string
): Promise<Comment> => {
  try {
    // Faz uma requisição POST para criar um novo comentário no post específico
    const response = await api.post<Comment>(`/comments/${postid}`, {
      userid,
      content,
      token,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao criar comentário:", error);
    throw error;
  }
};

// Função assíncrona que obtém e retorna todos os comentários para um post específico
export const commentsData = async (postid: string): Promise<Comment[]> => {
  try {
    // Chama a função para obter todos os comentários para o post específico
    const comments = await getAllCommentsForPost(postid);
    return comments;
  } catch (error) {
    console.error("Erro ao obter dados de comentários:", error);
    throw error;
  }
};
