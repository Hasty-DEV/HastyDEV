import { FaHeart, FaRegHeart, FaComment, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useCallback, useEffect, useState } from "react";
import PostContainer from "../../styles/post/Post.styles";

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
}

import userIconDefault from "../../assets/user/user_icon.png";
import { getUserIconByID } from "../../../data/services/getUserIconService";

const Post = ({ post }: { post: PostType }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [formattedUpdatedAt, setFormattedUpdatedAt] = useState<string>("");
  const [userIcon, setUserIcon] = useState<string | null>(null);

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
                  <span className="name">{`${post.author.first_name} ${post.author.last_name}`}</span>
                </Link>
                <span className="date">{formattedUpdatedAt}</span>
              </div>
            </div>
          </div>
          <div className="content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <img src={post.img} alt="" />
          </div>
          <div className="info">
            <div className="item">
              {liked ? <FaHeart /> : <FaRegHeart />}1 Likes
            </div>
            <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
              <FaComment />2 Comentários
            </div>
            <div className="item">
              <FaShare />
              Compartilhe
            </div>
          </div>
          {commentOpen && <Comments postId={post.postid.toString()} />}
        </div>
      </div>
    </PostContainer>
  );
};

export default Post;
