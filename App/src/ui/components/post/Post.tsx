import { FaHeart, FaRegHeart, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useCallback, useEffect, useState } from "react";
import PostContainer from "../../styles/post/Post.styles";
import { getUserData } from "../../../data/services/userService";
import { UserDataTypes } from "../../../data/@types/UserData/UserData.type";


interface AuthorType {
  first_name: string;
  last_name: string;
}

interface PostType {
  postid: number | string;
  userid: number | string;
  author: AuthorType;
  content: string;
  img?: string;
  updatedAt: string;
  title: string;
  subtitle: String;
  price: String;
  companyContent: String;
}

import userIconDefault from "../../assets/user/user_icon.png";
import { getUserIconByID } from "../../../data/services/getUserIconService";

const Post = ({ post }: { post: PostType }) => {
  const [userData, setUserData] = useState<UserDataTypes | null>(null);
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
      const user = await getUserData();
      setUserData(user);
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
      <div className="post">
        <div className="container">
          <div className="user">
            <div className="userInfo">
              <img src={userIcon || userIconDefault} alt="" />
              <div className="details">
                <Link
                  to={`/profile/${post.userid}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="name">{`${post.author.first_name} ${post.author.last_name} | nível: ${userData?.level.level}`}</span>
                </Link>
                <span className="date">{formattedUpdatedAt}</span>
              </div>
            </div>
          </div>
          <div className="content">

    <h2>
      {post.title}
    </h2>

    <div className="title-container">
  <h5>{post.subtitle}</h5>

  <p className="price">{post.price}</p>
  </div>
  <br />
             {expanded ? (
              <>
                <p>{post.content}</p>

                <img src={post.img} alt="" />

                <hr />
                <h4>Dados do Contratante</h4>
               
            {/*como no catho, quero colocar o nivel game do contratante ou ao inves de colocar addos  do contratante, colocar as fotos e palavras chave... nao sei se precisa colcoar os dados... so da pessoa clicar no perfil ve quem é*/}

                

                <button onClick={() => setExpanded(false)}>Ler menos</button>
              </>
            ) : (
              <>
                <p>{post.content.slice(0, 200)}...</p>
                <button onClick={() => setExpanded(true)}>Ler mais</button>
              </>
            )}
          </div>
          <div className="info">
            <div className="item">
              {liked ? <FaHeart /> : <FaRegHeart />}1 Likes
            </div>
            <div
              className="item"
              onClick={() => setCommentOpen(!commentOpen)}
            >
              <FaComment />2 Comentários
            </div>
          </div>
          {commentOpen && <Comments postId={post.postid.toString()} />}
        </div>
      </div>
    </PostContainer>
  );
};

export default Post;
