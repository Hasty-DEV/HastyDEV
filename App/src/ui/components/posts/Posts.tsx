import { useState, useEffect, useCallback } from "react";
import PostsContainer from "../../styles/posts/Posts.styles";
import Post from "../post/Post";
import { getPosts } from "../../../data/services/postsService";
import { PostType } from "../../../data/@types/Post/Post.type";

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
    <PostsContainer className="d-flex flex-column">
      <h2 className="mb-3">Procure o Tabalho Ideal</h2>
      {posts.map((post) => (
        <Post post={post} key={post.postid} />
      ))}
    </PostsContainer>
  );
};

export default Posts;
