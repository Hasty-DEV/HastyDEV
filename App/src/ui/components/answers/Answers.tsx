import { useEffect, useState } from "react";
import AnswersContainer from "../../styles/answers/Answers.styles";
import { api } from "../../../data/services/api";
import { getUserIconByID } from "../../../data/services/getUserIconService";
import userIconDefault from "../../assets/user/user_icon.png";
import { Answer } from "../../../data/@types/Answer/Answer.type";

const Answers: React.FC<{ commentId: string }> = ({ commentId }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [, setUserName] = useState<string | null>(null);
  const [userIcon, setUserIcon] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [newAnswer, setNewAnswer] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserId = localStorage.getItem("userId");
        const storedToken = localStorage.getItem("userToken");

        if (storedUserId && storedToken && commentId) {
          setUserId(storedUserId);
          setToken(storedToken);

          const answersForPost = await getAnswersForPost(commentId);
          setAnswers(answersForPost);

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
            if (icon) {
              setUserIcon(icon);
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
  }, [commentId]);

  const getAnswersForPost = async (commentId: string): Promise<Answer[]> => {
    try {
      const response = await api.get<Answer[]>(`/answers/${commentId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewAnswer(event.target.value);
  };

  const handleAnswerSubmit = async () => {
    try {
      if (userId && token && commentId) {
        const payload = {
          userid: userId,
          content: newAnswer,
          token: token,
          id: userId,
        };
        await api.post(`/answers/${commentId}`, payload, {
          headers: {
            id: userId,
            Authorization: `Bearer ${token}`,
          },
        });

        const updatedAnswers = await getAnswersForPost(commentId);
        setAnswers(updatedAnswers);

        setNewAnswer("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AnswersContainer>
      <div className="answers">
        {answers.map((reply) => (
          <div key={reply.id} className="answer d-flex align-items-center ">
            <img className="m-2"src={userIcon || userIconDefault} alt="userIcon" />
            
            <div className="info ">
              <div className="d-flex align-items-center mb-1">
              <span className="m-2">{`${reply.author.first_name} ${reply.author.last_name}`}</span>
              <span className="date">
                  {formatCreatedAt(reply.createdAt)}
                </span>
              </div>
              

              <p>
                {reply.content.length > 200
                  ? `${reply.content.slice(0, 200)}...`
                  : reply.content}
              </p>
              {reply.content.length > 200 && (
                <span className="read-more">Ler mais</span>
              )}
            </div>
          </div>
        ))}
        <div className="write d-flex align-items-center">
          <input
            type="text"
            placeholder="Escreva uma resposta"
            value={newAnswer}
            onChange={handleInputChange}
            maxLength={200}
          />
          <button onClick={handleAnswerSubmit}>Enviar</button>
        </div>
      </div>
    </AnswersContainer>
  );
};

const formatCreatedAt = (updatedAt: string) => {
  const date = new Date(updatedAt);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    timeZone: "America/Sao_Paulo",
  };
  return date.toLocaleDateString("pt-BR", options);
};

export default Answers;
