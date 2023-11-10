import "./post.scss";
import { FaHeart, FaRegHeart, FaComment, FaShare } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

interface PostType {
  profilePic: string;
  userId: string;
  name: string;
  desc: string;
  img: string;
}

const Post = ({ post }: { post: PostType }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  // TEMPORARY
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FaHeart /> : <FaRegHeart />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <FaComment />
            12 Comments
          </div>
          <div className="item">
            <FaShare />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
