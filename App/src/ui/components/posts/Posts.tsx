import { useState, useEffect, useCallback } from "react";
import PostsContainer from "../../styles/posts/Posts.styles";
import Post from "../post/Post";


import { PostType } from "../../../data/@types/Post/Post.type";
import { api } from "../../../data/services/api";
import Loader from "../Loader/Loader";

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
    setLoading(true); // Define o estado de carregamento como verdadeiro antes de buscar os posts
    try {
      const response = await getPostsFilter(searchTerm);
      const reversedPosts = response.reverse();
      setPostFilter(reversedPosts);
    } catch (error) {
      console.error("Erro ao buscar os posts:", error);
    } finally {
      setLoading(false); // Define o estado de carregamento como falso após a busca dos posts, independentemente de sucesso ou erro
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchPostsFilter();
  }, [fetchPostsFilter]);

  return (
    <PostsContainer className="d-flex flex-column">
      <h2 className="mb-3">Procure o Trabalho Ideal</h2>
      {loading ? (
        <Loader /> // Renderiza o spinner de carregamento enquanto os posts estão sendo carregados
      ) : (
        postFilter.map((post) => <Post post={post} key={post.postid} />)
      )}
    </PostsContainer>
  );
};

export default Posts;
