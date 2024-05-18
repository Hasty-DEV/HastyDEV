import { useCallback, useEffect, useState } from 'react';
import { getUserData } from '../../data/services/userService'; 
import Loader from '../../ui/components/Loader/Loader';
import ProfileContainer from '../../ui/styles/Profile/Profile.styles';
import { getUserIconByID } from '../../data/services/getUserIconService';
import DefaultUserIcon from "../../ui/assets/user/user_icon.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { api } from '../../data/services/api';
import { UserDataTypes } from '../../data/@types/UserData/UserData.type';

function ProfilePage() {
  const [userData, setUserData] = useState<UserDataTypes | null>(null);
  const [userIcon, setUserIcon] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>(""); 

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    api.defaults.headers.common["id"] = userId;
    setUserId(userId ?? "");

    return () => {
      delete api.defaults.headers.common["id"];
    };
  }, []);

  const fetchData = useCallback(async () => {
    try {
      if (userId) {  
        const user = await getUserData();
        setUserData(user);
        const icon = await getUserIconByID(userId);
        if (icon && icon.data) {
          setUserIcon(URL.createObjectURL(new Blob([icon.data])));
        }
      }
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    } 
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
 
  return (
    <div className="container">
      {userData ? (
          <ProfileContainer>
            <div className="card w-100 d-flex flex-column align-items-center">
              <label
                htmlFor="fileInput"
                className="profileImageContainer position-relative d-flex justify-content-center align-items-center "
              >
                <img
                  className="profileImage w-100 h-100 text-center d-flex flex-column"
                  src={ userIcon || DefaultUserIcon}
                  alt=""
                />
              </label>
              
              <div className="social-links d-flex justify-content-center">
                {userData.userPerfil?.instagram && (
                  <a href={userData.userPerfil.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
                {userData.userPerfil?.facebook && (
                  <a href={userData.userPerfil.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                )}
                {userData.userPerfil?.linkedin && (
                  <a href={userData.userPerfil.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {userData.userPerfil?.github && (
                  <a href={userData.userPerfil.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
                {userData.userPerfil?.whatsapp && (
                  <a href={userData.userPerfil.whatsapp} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                  </a>
                )}
              </div>
              <h1 className="text-center">{userData.first_name} {userData.last_name}</h1>
              <div className="about-me">
                <h2 className="text-center">Sobre Mim</h2>
                <p className="text-center">{userData.userPerfil?.aboutMe || "Adicione informações sobre você aqui."}</p>
              </div>
              <div className="contacts">
                <h2 className="text-center">Contatos</h2>
                <p className="text-center"> <FaEnvelope /> :    {userData.email  || "emailexeplo@gmail.com"}</p>
                <p className="text-center"><FaPhone /> :    {  "(11) 93042-2942"}</p>
              </div>
            </div>
          </ProfileContainer>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ProfilePage;
