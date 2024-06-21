import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Loader from '../Loader/Loader';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import LeftBarContainer from '../../styles/leftBar/LeftBar.styles';
import { MdOutlineSecurity } from 'react-icons/md';
import { useLeftBar } from './useLeftBar';
import { IoMdPerson } from 'react-icons/io';
import { ImProfile } from 'react-icons/im';
import { BsPostcardHeart } from "react-icons/bs";

const LeftBar = () => {
  const { loading, userIcon, userData, userId, handleLogout } = useLeftBar();

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
                    {userData ? `${userData.first_name} ${userData.last_name}` : 'Usuário'}
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="menu d-flex flex-column ">
              <span>Painel</span>
              {userData?.role !== 'user' && (
                 <Link to="/createpost" className="link-style">
                <div className="item d-flex align-items-center">   
                    <AiOutlinePlusCircle className="iconstyle" />         
                  <span>Criar Post</span>
                </div>
                </Link>
              )}
               <Link to={`/perfil`} className="link-style" >
              <div className="item d-flex align-items-center">              
                  <IoMdPerson size={28} className="iconstyle"/>
                <span>Editar Perfil</span>
              </div>
              </Link>
              <Link to={`/privacypolicy`} className="link-style">
              <div className="item d-flex align-items-center">      
                <MdOutlineSecurity size={28} className="iconstyle"/> 
                <span>Política de Privacidade</span>
              </div>
              </Link>
              <Link to={`/profile/${userId}`} className="link-style">
              <div className="item d-flex align-items-center">              
                  <ImProfile size={28} className="iconstyle" />
                <span>Meu Perfil</span>
              </div>
              </Link>
              <Link to={`/myposts/${userId}`} className="link-style">
              <div className="item d-flex align-items-center">
                <BsPostcardHeart size={28} className="iconstyle"/>
                <span>meus posts</span>
              </div>
              </Link>
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
