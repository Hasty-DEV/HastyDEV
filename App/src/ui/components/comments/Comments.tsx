import  { useEffect, useState } from "react";
import CommentsContainer from "../../styles/comments/Commets.styles";
import { api } from "../../../data/services/api";
import Answers from "../answers/Answers";
import { FaComment } from "react-icons/fa";
import { getUserIconByID } from "../../../data/services/getUserIconService";
import userIconDefault from "../../assets/user/user_icon.png";


interface Comment {
  id: string;
  userid: string;
  content: string;
  createdAt: string;
  commentid: number | string;
}
const Comments: React.FC<{ postId: string }> = ({ postId }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userIcon, setUserIcon] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [answerOpen, setAnswerOpen] = useState<string[]>([]);



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
            const userResponse = await api.get(`/user/${storedUserId}`, {
              headers: {
                id: storedUserId,
                Authorization: `Bearer ${storedToken}`,
              },
            });

            if (userResponse.data && userResponse.data.user) {
              const userData = userResponse.data.user;
              setUserName(`${userData.first_name} ${userData.last_name}`);
            }

            const icon = await getUserIconByID(storedUserId);
            if (icon && icon.data) {
              setUserIcon(URL.createObjectURL(new Blob([icon.data])));
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
      const response = await api.get<Comment[]>(`/comments/${postId}`, {
        headers: {
          id: userId || "",
          Authorization: `Bearer ${token || ""}`,
        },
      });
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
          id:userId,
        };
        await api.post(`/comments/${postId}`, payload, {
          headers: {
            id: userId,
            Authorization: `Bearer ${token}`,
          },
        });

        const updatedComments = await getCommentsForPost(postId);
        setComments(updatedComments);

        setNewComment("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleComments = (commentId: string) => {
    setAnswerOpen(answerOpen.includes(commentId)
      ? answerOpen.filter(id => id !== commentId)
      : [...answerOpen, commentId]
    );
  };


  return (
    <CommentsContainer>
      <div className="comments">
        <div className="write">
        <img src={userIcon || userIconDefault} alt="" />
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
          <img src={userIcon || userIconDefault} alt="" />
            <div className="info">
              <span>{userName}</span>
              <p>{comment.content}</p>
            </div>
            <span className="date">{formatCreatedAt(comment.createdAt)}</span>

            <div className="item" onClick={() => toggleComments(comment.commentid.toString())}>
              <FaComment /> {answerOpen.includes(comment.commentid.toString()) ? "Cancelar" : "Respostas"}
            </div>

            {answerOpen.includes(comment.commentid.toString()) && <Answers commentId={comment.commentid.toString()} />}
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