import PostsContainer from "../../styles/posts/Posts.styles";
import Post from "../post/Post";

const Posts = () => {
  // TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Jamilly, a reacter",
      userId: "1",
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Alguem Poderia Montar um site com esse layout?",
      img: "https://s3-alpha.figma.com/hub/file/3581213814/e622a7cd-e8ce-4613-8289-94660d0e0191-cover.png",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: "2",
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Preciso de Algúem para fazer um site em react...",
      img: "",
    },
  ];

  return (
    <PostsContainer>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </PostsContainer>
  );
};

export default Posts;
