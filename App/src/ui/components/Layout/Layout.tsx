import LeftBar from "../leftBar/LeftBar";
import Header from "../../partials/navbar/Navbar";
import RightBar from "../rightBar/RightBar";
import ChatButton from "../ChatButton/ChatButton";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6, paddingTop: "100px" }}>
          
        </div>
        <RightBar />
      </div>
      <ChatButton />
    </>
  );
};

export default Layout;
