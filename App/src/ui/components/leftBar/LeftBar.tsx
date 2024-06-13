import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { AiOutlinePlusCircle } from "react-icons/ai";
import LeftBarContainer from "../../styles/leftBar/LeftBar.styles";
import { IoGameController, IoVideocam } from "react-icons/io5";
import { RiGalleryFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useLeftBar } from "./useLeftBar";

const LeftBar = () => {
  const { loading, userIcon, userData, handleLogout } = useLeftBar();

  return (
    <>
      {loading && <Loader />}
      <LeftBarContainer className="position-sticky">
        <div className="leftBar">
          <div className="container">
            <div className="row justify-content-end">
              <div className="menu">
                <div className="user d-flex align-items-center">
                  <Link to="/perfil" className="mr-3">
                    <img src={userIcon} alt="User Icon" />
                  </Link>
                  <span className="text-capitalize d-inline-block">
                    {userData
                      ? `${userData.first_name} ${userData.last_name}`
                      : "Usuário"}
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="menu d-flex flex-column ">
              <span>Painel</span>
              {userData?.role !== "user" && (
                <div className="item d-flex align-items-center">
                  <Link to="/createpost">
                    <AiOutlinePlusCircle className="plus-circle" />
                  </Link>
                  <span>Criar Post</span>
                </div>
              )}
              <div className="item d-flex align-items-center">
                <IoGameController size={28} />
                <span>Dashboard</span>
              </div>
              <div className="item d-flex align-items-center">
                <RiGalleryFill size={28} />
                <span>Projetos Concluídos</span>
              </div>
              <div className="item d-flex align-items-center">
                <IoVideocam size={28} />
                <span>Recompensas</span>
              </div>
              <div className="item d-flex align-items-center">
                <MdEmail size={28} />
                <span>Lista de Favoritos</span>
              </div>
            </div>
            <hr />
            <div className="menu d-flex flex-column mt-3">
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </LeftBarContainer>
    </>
  );

};

export default LeftBar;
