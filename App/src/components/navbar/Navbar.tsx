import "./navbar.scss";
import styled from "styled-components";
import {
  FaHome,
  FaSun,
  FaMoon,
  FaTh,
  FaBell,
  FaEnvelope,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import UserIcon from "../../assets/user/user_icon.png";

const StyledIcon = styled.div`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const StyledInput = styled.input`
  outline: none;
`;

const Navbar = () => {
  const construcao = () => {
    alert("Em construção!");
  };

  const darkModeContext = useContext(DarkModeContext);

  const { toggle, darkMode } = darkModeContext;

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>HastyDEV</span>
        </Link>
        <StyledIcon as={FaHome} />
        {darkMode ? (
          <StyledIcon as={FaSun} onClick={toggle} />
        ) : (
          <StyledIcon as={FaMoon} onClick={toggle} />
        )}
        <StyledIcon as={FaTh} />
        <div className="search">
          <StyledIcon as={FaSearch} />
          <StyledInput
            type="text"
            placeholder="Procurar..."
            onClick={construcao}
          />
        </div>
      </div>
      <div className="right">
        <StyledIcon as={FaUser} />
        <StyledIcon as={FaEnvelope} />
        <StyledIcon as={FaBell} />
        <div className="user">
          <img src={UserIcon} alt="" />
          <span>name</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
