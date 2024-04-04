import { useEffect, useState } from "react";
import AnswersContainer from "../../styles/answers/Answers.styles";
import { api } from "../../../data/services/api";
import { getUserIconByID } from "../../../data/services/getUserIconService";
import userIconDefault from "../../assets/user/user_icon.png";
import { Answer } from "../../../data/@types/Answer/Answer.type";
import { CommentType } from "../../../data/@types/Comment/Comment.type";

const Answers = ( { id }: Partial<CommentType> ) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userIcon, setUserIcon] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [newAnswer, setNewAnswer] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserId = localStorage.getItem("userId");
        const storedToken = localStorage.getItem("userToken");

        if (storedUserId && storedToken && id) {
          setUserId(storedUserId);
          setToken(storedToken);

          const answersForPost = await getAnswersForPost(id);
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
  }, [id]);

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
      if (userId && token && id) {
        const payload = {
          userid: userId,
          content: newAnswer,
          token: token,
          id: userId,
        };
        await api.post(`/answers/${id}`, payload, {
          headers: {
            id: userId,
            Authorization: `Bearer ${token}`,
          },
        });

        const updatedAnswers = await getAnswersForPost(id);
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
        <div className="write d-flex align-items-center ">
          <input
            type="text"
            placeholder="Escreva uma resposta"
            value={newAnswer}
            onChange={handleInputChange}
          />
          <button onClick={handleAnswerSubmit}>Enviar</button>
        </div>

        {answers.map((reply) => (
          <div key={reply.id} className="answer d-flex">
            <img src={userIcon || userIconDefault} alt="" />
            <div className="info">
              <span>{userName}</span>
              <p>{reply.content}</p>
            </div>
            <span className="date">{formatCreatedAt(reply.createdAt)}</span>
          </div>
        ))}
      </div>
    </AnswersContainer>
  );
};

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

export default Answers;
