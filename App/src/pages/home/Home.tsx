import Stories from "../../ui/components/stories/stories"
import Posts from "../../ui/components/posts/Posts"
import Share from "../../ui/components/share/Share"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home