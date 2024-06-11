import PostsContainer from "../../styles/posts/Posts.styles";
import Post from "../post/Post";
import Loader from "../Loader/Loader";
import { usePosts } from "./usePosts";

type PostsProps = {
  searchTerm: string;
};

const Posts = ({ searchTerm }: PostsProps) => {
  const { loading, postFilter } = usePosts(searchTerm);

  return (
    <PostsContainer className="d-flex flex-column">
      <h2 className="mb-3 fw-bold text-xl-center">Procure o Trabalho Ideal</h2>
      {loading && <Loader />}
      {postFilter.length > 0 && postFilter.map((post) => <Post post={post} key={post.postid} />)}
      {!postFilter && <p>Nenhum post encontrado.</p>}
    </PostsContainer>
  );
};

export default Posts;
