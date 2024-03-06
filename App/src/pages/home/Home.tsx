import Posts from "../../ui/components/posts/Posts";
import Share from "../../ui/components/share/Share";

const Home = () => {
  return (
    <div className="home">
      <Share />
      <Posts />
    </div>
  );
};

export default Home;
