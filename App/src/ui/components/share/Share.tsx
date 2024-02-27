import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import Image from "../../assets/img.png";
import DefaultUserIcon from "../../assets/user/user_icon.png";
import ShareContainer from "../../styles/share/Share.styles";
import { api } from "../../../data/services/api";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { getUserIcon } from "../../../data/services/getUserIconService";

const Share = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const title = titleRef.current?.value;
    const content = contentRef.current?.value;

    if (!title || !content) {
      console.error("Título e conteúdo são obrigatórios");
      return;
    }

    const userId = await localStorage.getItem("userId");
    const userToken = await localStorage.getItem("userToken");
    setLoading(true);

    try {
      const response = await api.post("/posts", {
        id: userId,
        token: `Bearer ${userToken}`,
        title: title,
        content: content,
      });
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    } finally {
      setLoading(false);
      navigate("/createPost");
    }
  };

  const [userIcon, setUserIcon] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const icon = await getUserIcon();
      if (icon && icon.data) {
        setUserIcon(URL.createObjectURL(new Blob([icon.data])));
      }
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {loading && <Loader />}
      <ShareContainer>
        <div className="share">
          <form className="container" onSubmit={(e) => handleOnSubmit(e)}>
            <div className="top">
              <img src={userIcon || DefaultUserIcon} alt="" />
              <div>
                <input
                  type="text"
                  placeholder={`Escolha um título...`}
                  ref={titleRef}
                />
                <input
                  type="text"
                  placeholder={`Publicar Pedido de Projeto...`}
                  ref={contentRef}
                />
              </div>
            </div>
            <hr />
            <div className="bottom">
              <div className="left">
                <input type="file" id="file" style={{ display: "none" }} />
                <label htmlFor="file">
                  <div className="item">
                    <img src={Image} alt="" />
                    <span>Adicionar Imagem</span>
                  </div>
                </label>
              </div>
              <div className="right">
                <button type="submit">Compartilhar</button>
              </div>
            </div>
          </form>
        </div>
      </ShareContainer>
    </>
  );
};

export default Share;
