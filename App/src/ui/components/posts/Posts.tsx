import { useState, useEffect, useCallback } from "react";
import PostsContainer from "../../styles/posts/Posts.styles";
import Post from "../post/Post";
import { getPosts } from "../../../data/services/postsService";

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
  categories: String;
  progammingLanguages: String;
  deadline: Date;
}

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await getPosts();
      const reversedPosts = response.reverse();
      setPosts(reversedPosts);
    } catch (error) {
      console.error("Erro ao buscar os posts:", error);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <PostsContainer>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} key={post.postid} />
        ))}
      </div>
    </PostsContainer>
  );
};

export default Posts;
