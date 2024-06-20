import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart, FaComment, FaDownload, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { getUserData } from "../../../data/services/userService";
import { UserDataTypes } from "../../../data/@types/UserData/UserData.type";
import userIconDefault from "../../assets/user/user_icon.png";
import { getUserIconByID } from "../../../data/services/getUserIconService";
import { PostType } from "../../../data/@types/Post/Post.type";
import { api } from "../../../data/services/api";
import PostContainer, { BussinessDataContainer, LikeContainer, CommentContainer, ButtonLer } from "../../styles/post/Post.styles";

const MyPost = ({ post }: { post: PostType }) => {
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

        if (!userId || !userToken) {
          throw new Error('User ID or token not found in localStorage.');
        }

        api.defaults.headers.common["id"] = userId;
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;

        setUserId(userId);
        setUserToken(userToken);

        const user = await getUserData();
        setUserData(user);

        const icon = await getUserIconByID(post.userid);
        if (icon && icon.data) {
          setUserIcon(URL.createObjectURL(new Blob([icon.data])));
        }

        const response = await api.post("/has-liked", {
          postId: post.postid,
          id: userId,
          token: `Bearer ${userToken}`
        });
        setLiked(response.data.liked);

        const filesResponse = await api.get(`/get-files/${post.userid}/${post.postid}`);
        setFiles(filesResponse.data.files);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [post.userid, post.postid]);

  const likePost = async () => {
    if (liked) {
      console.log("User already liked this post.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post(`/save-Likes`, {
        postId: post.postid,
        id: userId,
        token: `Bearer ${userToken}`
      });

      if (!response) {
        throw new Error('Error saving like');
      }

      setLikes(prevLikes => prevLikes + 1);
      setLiked(true);
    } catch (error) {
      console.error('Error saving like:', error);
    } finally {
      setLoading(false);
    }
  };

  const unlikePost = async () => {
    if (!liked) {
      console.log("User hasn't liked this post yet.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post(`/remove-like`, {
        postId: post.postid,
        id: userId,
        token: `Bearer ${userToken}`
      });

      if (!response) {
        throw new Error('Error removing like');
      }

      setLikes(prevLikes => prevLikes - 1);
      setLiked(false);
    } catch (error) {
      console.error('Error removing like:', error);
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
      console.error("Error downloading file:", error);
    }
  };

  return (
    <PostContainer>
      <div className="d-flex align-items-start justify-content-between px-3 pt-4">
        <div className="d-flex flex-column align-items-start justify-content-center">
          <h2 className="fw-bold text-capitalize">{post.title}</h2>
          <h5 className="fw-medium text-capitalize">{post.subtitle}</h5>
          <span className="text-capitalize">Published: {formattedUpdatedAt}</span>
          <span className="text-capitalize">Deadline: {new Date(post.deadline).toLocaleDateString()}</span>
        </div>
        <div className="d-flex flex-column align-items-start justify-content-center">
          <span className="mt-1 fs-3">R$ {post.price}</span>
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
            <ButtonLer className="LerMais" variant="Link" onClick={() => setExpanded(false)}>Leia Menos</ButtonLer>
            <BussinessDataContainer className="d-flex flex-column justify-content-center align-items-start">
              <h4>Business Data</h4>
              <div className="d-flex justify-content-center align-items-center pt-2 pb-2">
                <Link
                  to={`/profile/${post.userid}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img src={userIcon || userIconDefault} className="rounded-circle" alt="User Profile" />
                </Link>
                <span>{`${post.author?.first_name} ${post.author?.last_name} `}</span>
              </div>
              <p>{post.companyContent}</p>
            </BussinessDataContainer>
          </>
        ) : (
          <>
            {post.content && <p>{post.content.slice(0, 200)}...</p>}
            <ButtonLer variant="Link" onClick={() => setExpanded(true)} className="text-start">Leia Mais...</ButtonLer>
          </>
        )}
        <div className="d-flex align-items-center justify-content-between w-50 pb-3">
          <LikeContainer className="w-50 d-flex align-items-center justify-content-start">
            {loading ? (
              <FaSpinner className="loading-icon" />
            ) : (
              liked ? <FaHeart onClick={unlikePost} /> : <FaRegHeart onClick={likePost} />
            )}
            <span>{likes} Likes</span>
          </LikeContainer>

          <CommentContainer
            className="w-50 d-flex align-items-center justify-content-start"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <FaComment />
            <span>Comments</span>
          </CommentContainer>

        </div>
        {commentOpen && (
          <div className="w-100">
            <Comments postId={post.postid.toString()} />
          </div>
        )}
      </div>
    </PostContainer>
  );
};

export default MyPost;
