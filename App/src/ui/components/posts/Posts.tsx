import  { useState, useEffect, useCallback } from "react";
import PostsContainer from "../../styles/posts/Posts.styles";
import Post from "../post/Post";
import Loader from "../Loader/Loader";

import { PostType } from "../../../data/@types/Post/Post.type";
import { api } from "../../../data/services/api";

type PostsProps = {
  searchTerm: string;
};

const Posts = ({ searchTerm }: PostsProps) => {
  const [postFilter, setPostFilter] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getPostsFilter = async (searchTerm: string) => {
    try {
      const userToken = await localStorage.getItem("userToken");

      if (userToken) {
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        const response = await api.get(
          `/items/search?searchTerm=${searchTerm}`
        );

        return response.data;
      }
    } catch (error) {
      console.error("Erro ao pegar dados de Posts:", error);
      throw error;
    }
  };

  const fetchPostsFilter = useCallback(async () => {
    setLoading(true); 
    try {
      const response = await getPostsFilter(searchTerm);
      const reversedPosts = response.reverse();
      setPostFilter(reversedPosts);
    } catch (error) {
      console.error("Erro ao buscar os posts:", error);
    } finally {
      setLoading(false); 
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchPostsFilter();
  }, [fetchPostsFilter]);

  return (
    <PostsContainer className="d-flex flex-column">
      <h2 className="mb-3">Procure o Trabalho Ideal</h2>
      {loading ? (
        <Loader /> 
      ) : (
        postFilter.length > 0 ? (
          postFilter.map((post) => <Post post={post} key={post.postid} />)
        ) : (
          <p>Nenhum post encontrado.</p>
        )
      )}
    </PostsContainer>
  );
};

export default Posts;
