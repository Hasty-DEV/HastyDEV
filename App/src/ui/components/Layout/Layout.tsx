import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DarkModeContext } from "../../../data/context/darkModeContext";
import LeftBar from "../leftBar/LeftBar";
import Navbar from "../navbar/Navbar";
import RightBar from "../rightBar/RightBar";

const Layout = () => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <Navbar />
            <div style={{ display: "flex" }}>
                <LeftBar />
                <div style={{ flex: 6 }}>
                    <Outlet />
                </div>
                <RightBar />
            </div>
        </div>
    );
}

export default Layout;