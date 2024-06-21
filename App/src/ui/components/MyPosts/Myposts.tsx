import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PostsContainer from "../../styles/posts/Posts.styles";
import Loader from "../Loader/Loader";
import MyPost from "../MyPost/Mypost";
import { usePosts } from "../posts/usePosts";

type PostsProps = {
  searchTerm: string;
};

const MyPosts = ({ searchTerm }: PostsProps) => {
  const { userId } = useParams<{ userId?: string }>();
  const { loading, filteredPosts, getPostsByUserId, fetchPostsFilter } = usePosts(searchTerm);

   useEffect(() => {
    fetchPostsFilter();
  }, [fetchPostsFilter]);

  useEffect(() => {
    if (userId) {
      getPostsByUserId(userId);  
    }
  }, [userId, getPostsByUserId]);

  return (
    <PostsContainer className="d-flex flex-column">
      <h2 className="mb-3 fw-bold text-xl-center">Meus Posts</h2>
      {loading && <Loader />}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <MyPost post={post} key={post.postid} />)
      ) : (
        !loading && <p>Nenhum post encontrado.</p>
      )}
    </PostsContainer>
  );
};

export default MyPosts;
