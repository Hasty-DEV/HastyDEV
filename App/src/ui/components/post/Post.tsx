import { FaHeart, FaRegHeart, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useCallback, useEffect, useState } from "react";
import PostContainer, { BussinessDataContainer, CommentContainer, LikeContainer } from "../../styles/post/Post.styles";
import userIconDefault from "../../assets/user/user_icon.png";
import { getUserIconByID } from "../../../data/services/getUserIconService";
import { Button } from "react-bootstrap";
import { PostType } from "../../../data/@types/Post/Post.type";

const Post = ({ post }: { post: PostType }) => {

  const [commentOpen, setCommentOpen] = useState(false);
  const [formattedUpdatedAt, setFormattedUpdatedAt] = useState<string>("");
  const [userIcon, setUserIcon] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const liked = false;

  const formatUpdatedAt = (updatedAt: string) => {
    const date = new Date(updatedAt);
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

  useEffect(() => {
    setFormattedUpdatedAt(formatUpdatedAt(post.updatedAt));
  }, [post.updatedAt]);

  const fetchData = useCallback(async () => {
    try {

      const icon = await getUserIconByID(post.userid);
      if (icon && icon.data) {
        setUserIcon(URL.createObjectURL(new Blob([icon.data])));
      }
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    }
  }, [post.userid]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <PostContainer>
      <div className="d-flex align-items-start justify-content-between px-3 pt-4">
        <div className="d-flex flex-column align-items-start justify-content-center">
          <h2 className="fw-bold text-capitalize">{post.title}</h2>
          <h5 className="fw-medium text-capitalize">{post.subtitle}</h5>
          <span className="text-capitalize">Publicado: {formattedUpdatedAt}</span>
          <span>Quantidade de Interessados: 5</span>
        </div>
        <div className="d-flex flex-column align-items-start justify-content-center">
          <Button className="text-capitalize rounded bg-success border-0">ir para projeto</Button>
          <span className="mt-1">R$ {post.price}</span>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start justify-content-between px-3 pt-4">
        {expanded ? (
          <>
            <p>{post.content}</p>
            <img src={post.img} alt="" />
            {/*como no catho, quero colocar o nivel game do contratante ou ao inves de colocar addos  do contratante, colocar as fotos e palavras chave... nao sei se precisa colcoar os dados... so da pessoa clicar no perfil ve quem é*/}
            <Button variant="Link" onClick={() => setExpanded(false)}>Ler menos</Button>
            <BussinessDataContainer className="d-flex flex-column justify-content-center align-items-start">
              <h4 >Dados do Contratante</h4>
              <div className="d-flex justify-content-center align-items-center pt-2 pb-2">
                <Link
                  to={`/profile/${post.userid}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img src={userIcon || userIconDefault} className="rounded-circle" alt="User Profile" />
                </Link>
                <span >{`${post.author.first_name} ${post.author.last_name} `}</span>
              </div>
            </BussinessDataContainer>
          </>
        ) : (
          <>
            {post.content && <p>{post.content.slice(0, 200)}...</p>}
            <Button variant="Link" onClick={() => setExpanded(true)} className="text-start">Ler mais</Button>
          </>
        )}
        <div className="d-flex align-items-center justify-content-between w-50 pb-3">
          <LikeContainer className="w-50 d-flex align-items-center justify-content-start">
            {liked ? <FaHeart /> : <FaRegHeart />}
            <span>1 Likes</span>
          </LikeContainer>
          <CommentContainer
            className="w-50 d-flex align-items-center justify-content-start"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <FaComment />
            <span>2 Comentários</span>
          </CommentContainer>
        </div>
        {commentOpen && <Comments postId={post.postid.toString()} />}
      </div>
    </PostContainer>
  );
};

export default Post;
