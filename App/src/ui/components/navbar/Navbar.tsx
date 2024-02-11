/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../../data/context/darkModeContext";
import UserIcon from "../../assets/user/user_icon.png";
import NavbarContainer from "../../styles/navbar/Navbar.styles";
import { api } from "../../../data/services/api";

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

  const [userData, setUserData] = useState<any>(null);

  const handleOnLoad = () => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      const fetchData = async () => {
        try {
          const response = await api.get(`/user/${userId}`);
          console.log(response.data);
          setUserData(response.data.user);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  };
  useEffect(handleOnLoad, []);

  const darkModeContext = useContext(DarkModeContext);

  const { toggle, darkMode } = darkModeContext;

  return (
    <NavbarContainer onLoad={handleOnLoad}>
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
            <span>
              {userData
                ? `${userData.first_name} ${userData.last_name}`
                : "Usuário"}
            </span>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
