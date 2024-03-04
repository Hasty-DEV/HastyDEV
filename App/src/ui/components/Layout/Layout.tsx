import { Outlet } from "react-router-dom";
import LeftBar from "../leftBar/LeftBar";
import Header from "../../partials/navbar/Navbar";
import RightBar from "../rightBar/RightBar";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6, paddingTop: "100px" }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </>
  );
};

export default Layout;
