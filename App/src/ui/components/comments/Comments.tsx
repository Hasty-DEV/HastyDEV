// Comments.tsx - Componente de Comentários
import  { useEffect, useState } from "react";
import UserIcon from "../../assets/user/user_icon.png";
import CommentsContainer from "../../styles/comments/Commets.styles";
import { api } from "../../../data/services/api";

interface Comment {
  id: string;
  userid: string;
  content: string;
  createdAt: string;
}

const Comments: React.FC<{ postId: string }> = ({ postId }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null); 
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserId = localStorage.getItem("userId");
        const storedToken = localStorage.getItem("userToken");
  
        if (storedUserId && storedToken && postId) {
          setUserId(storedUserId);
          setToken(storedToken);
  
          
          const commentsForPost = await getCommentsForPost(postId);
          setComments(commentsForPost);
  
          try {
            
            const userResponse = await api.get(`/user/${storedUserId}`);
            
  
           
            if (userResponse.data && userResponse.data.user) {
              const userData = userResponse.data.user;
              setUserName(`${userData.first_name} ${userData.last_name}`);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [postId]);
  

  const getCommentsForPost = async (postId: string): Promise<Comment[]> => {
    try {
      const response = await api.get<Comment[]>(`/comments/${postId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      if (userId && token && postId) {
        const payload = {
          userid: userId,
          content: newComment,
          token: token,
        };
        await api.post(`/comments/${postId}`, payload);

       
        const updatedComments = await getCommentsForPost(postId);
        setComments(updatedComments);

       
        setNewComment("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommentsContainer>
      <div className="comments">
        <div className="write">
          <img src={UserIcon} alt="" />
          <input
            type="text"
            placeholder="Escreva um comentário"
            value={newComment}
            onChange={handleInputChange}
          />
          <button onClick={handleCommentSubmit}>Enviar</button>
        </div>

        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <img src={UserIcon} alt="" />
            <div className="info">
              <span>{userName}</span>
              <p>{comment.content}</p>
            </div>
            <span className="date">{formatCreatedAt(comment.createdAt)}</span>
          </div>
        ))}
      </div>
    </CommentsContainer>
  );
};

// Função para formatar a data de criação
const formatCreatedAt = (createdAt: string): string => {
  const date = new Date(createdAt);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    localeMatcher: "best fit",
    weekday: "long",
    era: undefined,
    timeZone: "America/Sao_Paulo",
  };
  return date.toLocaleDateString("pt-BR", options);
};

export default Comments;
