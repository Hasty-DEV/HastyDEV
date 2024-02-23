import  { useState, useEffect, useCallback } from "react";
import UserIcon from "../../assets/user/user_icon.png";
import CommentsContainer from "../../styles/comments/Commets.styles";
import { commentsData, createCommentForPost } from "../../../data/services/commentsService";

interface AuthorType {
  first_name: string;
  last_name: string;
}

interface CommentType {
  id: string;
  userId: string | number;
  author: AuthorType;
  content: string;
  updatedAt: string;
  title: string;
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const fetchComments = useCallback(async () => {
    try {
      const response = await commentsData("postId");
      setComments(response as unknown as CommentType[]);
    } catch (error) {
      console.error("Erro ao buscar os comentários:", error);
    }
  }, []);

  const handleCommentSubmit = async () => {
    try {
      // Supondo que o userId esteja presente nos dados do comentário retornado pela API
      const commentsResponse = await commentsData("postId");

      if (commentsResponse.length > 0) {
        const userIdFromAPI = commentsResponse[0].userId; // Obtendo o userId da primeira resposta (ajuste conforme necessário)

        await createCommentForPost("postId", userIdFromAPI, newComment, "token");
        fetchComments();
      } else {
        console.error("Não foi possível obter o userId dos comentários.");
      }
    } catch (error) {
      console.error("Erro ao enviar o comentário:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <CommentsContainer>
      <div className="comments">
        <div className="write">
          <img src={UserIcon} alt="" />
          <input
            type="text"
            placeholder="write a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleCommentSubmit}>Enviar</button>
        </div>
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <img src={UserIcon} alt="" />
            <div className="info">
              <span>{comment.author.first_name} {comment.author.last_name}</span>
              <p>{comment.content}</p>
            </div>
            <span className="date">{comment.updatedAt}</span>
          </div>
        ))}
      </div>
    </CommentsContainer>
  );
};

export default Comments;
