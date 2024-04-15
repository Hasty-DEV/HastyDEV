import  { useState, useEffect } from "react";
import { FaHeart, FaRegHeart, FaComment, FaDownload, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import PostContainer, { BussinessDataContainer, CommentContainer, LikeContainer } from "../../styles/post/Post.styles";
import { getUserData } from "../../../data/services/userService";
import { UserDataTypes } from "../../../data/@types/UserData/UserData.type";
import userIconDefault from "../../assets/user/user_icon.png";
import { getUserIconByID } from "../../../data/services/getUserIconService";
import { PostType } from "../../../data/@types/Post/Post.type";
import { Button } from "react-bootstrap";
import { api } from "../../../data/services/api";

const Post = ({ post }: { post: PostType }) => {
  const [userId, setUserId] = useState<string>("");
  const [userToken, setUserToken] = useState<string>("");
  const [, setUserData] = useState<UserDataTypes | null>(null);
  const [commentOpen, setCommentOpen] = useState(false);
  const [formattedUpdatedAt, setFormattedUpdatedAt] = useState<string>("");
  const [userIcon, setUserIcon] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const userToken = localStorage.getItem("userToken");

        api.defaults.headers.common["id"] = userId;
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;

        setUserId(userId ?? "");
        setUserToken(userToken ?? "");

        const user = await getUserData();
        setUserData(user);

        const icon = await getUserIconByID(post.userid);
        if (icon && icon.data) {
          setUserIcon(URL.createObjectURL(new Blob([icon.data])));
        }

        const response = await api.post("/has-liked", {
          postId: post.postid,
          id: userId,
          token: "Bearer " + userToken
        });
        setLiked(response.data.liked);

        const filesResponse = await api.get(`/get-files/${post.userid}/${post.postid}`);
        setFiles(filesResponse.data.files);
      } catch (error) {
        console.error("Erro ao obter dados do usuário:", error);
      }
    };

    fetchData();
  }, [post.userid, post.userid, post.postid]);

  const likePost = async () => {
    setLoading(true);
    try {
      const response = await api.post(`/save-Likes`, {
        postId: post.postid,
        id: userId,
        token: "Bearer " + userToken
      });

      if (!response) {
        throw new Error('Erro ao salvar o like');
      }

      setLikes((prevLikes) => prevLikes + 1);
      setLiked(true);
    } catch (error) {
      console.error('Erro ao salvar o like:', error);
    } finally {
      setLoading(false);
    }
  };

  const unlikePost = async () => {
    setLoading(true);
    try {
      const response = await api.post(`/remove-like`, {
        postId: post.postid,
        id: userId,
        token: "Bearer " + userToken
      });

      if (!response) {
        throw new Error('Erro ao remover o like');
      }

      setLikes((prevLikes) => prevLikes - 1);
      setLiked(false);
    } catch (error) {
      console.error('Erro ao remover o like:', error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleDownload = async (fileName: string) => {
    try {
      const response = await api.get(`/download/${post.userid}/${post.postid}/${fileName}`, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Erro ao fazer o download do arquivo:", error);
    }
  };

  return (
    <PostContainer>
      <div className="d-flex align-items-start justify-content-between px-3 pt-4">
        <div className="d-flex flex-column align-items-start justify-content-center">
          <h2 className="fw-bold text-capitalize">{post.title}</h2>
          <h5 className="fw-medium text-capitalize">{post.subtitle}</h5>
          <span className="text-capitalize">Publicado: {formattedUpdatedAt}</span>
          <span className="text-capitalize">Prazo: {new Date(post.deadline).toLocaleDateString()}</span>
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
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  <button onClick={() => handleDownload(file)}>
                    <FaDownload />
                    {file}
                  </button>
                </li>
              ))}
            </ul>
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
              <p>{post.companyContent}</p>
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
            {loading ? (
              <FaSpinner className="loading-icon" />
            ) : (
              liked ? <FaHeart onClick={unlikePost}/> : <FaRegHeart onClick={likePost}/>
            )}
            <span >{likes} Likes</span>
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
