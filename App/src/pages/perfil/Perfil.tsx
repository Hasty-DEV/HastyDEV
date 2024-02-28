import { useState, ChangeEvent, FormEvent, useEffect, useCallback } from "react";
import { api } from "../../data/services/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import DefaultUserIcon from "../../ui/assets/user/user_icon.png";
// Importe o componente de estilo PerfilContainer do arquivo de estilo
import PerfilContainer from '../../ui/styles/perfil/Perfil.styles';
import { getUserIcon } from "../../data/services/getUserIconService";
import { getUserData } from "../../data/services/userService";

const Perfil: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [userIcon, setUserIcon] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserDataTypes | null>(null);
  

  
  const [name, setName] = useState<string>("Pepper");

  const [surname, setSurname] = useState<string>("Potts");

  const [username, setUsername] = useState<string>("pepper_potts");

  const [editMode, setEditMode] = useState<boolean>(false);


  interface UserDataTypes {
    first_name: string;
    last_name: string;
    username: string
  }

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const userToken = localStorage.getItem("userToken");

    api.defaults.headers.common["id"] = userId;
    api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;

    return () => {
      delete api.defaults.headers.common["id"];
      delete api.defaults.headers.common["Authorization"];
    };
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const user = await getUserData();
      setUserData(user);
      const icon = await getUserIcon();
      if (icon && icon.data) {
        setUserIcon(URL.createObjectURL(new Blob([icon.data])));
      }
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    }  
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setUploading(true);

    if (!file) {
      setError("Nenhum arquivo selecionado.");
      setUploading(false);
      return;
    }

    const formData = new FormData();
    formData.append("userIcon", file);

    try {
      const response = await api.post("/upload", formData);
      setSuccessMessage("Arquivo enviado com sucesso.");
      console.log("Arquivo enviado com sucesso:", response.data);
    } catch (error) {
      setError("Erro ao enviar o arquivo. Por favor, tente novamente.");
      console.error("Erro ao enviar o arquivo:", error);
    } finally {
      setUploading(false);
    }
  };


  
  const handleEditName = () => {

    setEditMode(true);

  };

 

  const handleEditSurname = () => {

    setEditMode(true);

  };

 

  const handleEditUsername = () => {

    setEditMode(true);

  };

 

  const handleSaveChanges = async () => {

    setEditMode(false);

 

    try {

      await api.post("/perfil", { name, surname, username });

      console.log("Alterações salvas com sucesso!");

    } catch (error) {

      console.error("Erro ao salvar alterações:", error);

    }

  };

  return (
    <PerfilContainer>
      <form onSubmit={(e) => handleUpload(e)} encType="multipart/form-data">
        <div className="card">
          <label htmlFor="fileInput" className="profileImageContainer">
            <img className="profileImage" src={userIcon || DefaultUserIcon} alt="" />
            <FontAwesomeIcon icon={faEdit} className="editIcon" />
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              name="userIcon"
              title="Upload de Avatar"
              style={{ display: "none" }}
              disabled={uploading}
            />
          </label>
  
          <div className="textContainer">
            <p className="name">
              <input
                className="input"
                type="text"
                value={editMode ? name : userData?.first_name || ""}
                onChange={(e) => setName(e.target.value)}
                disabled={!editMode}
              />
              {!editMode && (
                <button type="button" onClick={handleEditName} className="edit-button">
                  <FontAwesomeIcon icon={faEdit} className="editValues" />
                </button>
              )}
            </p>
            <p className="surname">
              <input
                className="input"
                type="text"
                value={editMode ? surname : userData?.last_name || ""}
                onChange={(e) => setSurname(e.target.value)}
                disabled={!editMode}
              />
              {!editMode && (
                <button type="button" onClick={handleEditSurname} className="edit-button">
                  <FontAwesomeIcon icon={faEdit} className="editValues" />
                </button>
              )}
            </p>
            <p className="username">
              <input
                className="input"
                type="text"
                value={editMode ? username : userData?.username || ""}
                onChange={(e) => setUsername(e.target.value)}
                disabled={!editMode}
              />
              {!editMode && (
                <button type="button" onClick={handleEditUsername} className="edit-button">
                  <FontAwesomeIcon icon={faEdit} className="editValues" />
                </button>
              )}
            </p>
          </div>
  
          {/* Adicione botões para editar e salvar sobrenome e nome de usuário */}
          <button type="submit" disabled={uploading} onClick={handleSaveChanges} className="saveButton">
            {uploading ? "Enviando..." : "Enviar"}
          </button>
          {error && <div style={{ color: "red" }}>{error}</div>}
          {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
        </div>
      </form>
    </PerfilContainer>
  );
};

export default Perfil;
