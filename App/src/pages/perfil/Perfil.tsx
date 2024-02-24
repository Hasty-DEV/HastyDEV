import { useState, ChangeEvent, FormEvent } from "react";
import { api } from "../../data/services/api";
import PerfilContainer from "../../ui/styles/perfil/Perfil.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import UserIcon from "../../ui/assets/user/user_icon.png";

const Perfil: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("Pepper");
  const [surname, setSurname] = useState<string>("Potts");
  const [username, setUsername] = useState<string>("pepper_potts");
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      console.error("Nenhum arquivo selecionado.");
      return;
    }

    const formData = new FormData();
    formData.append("userIcon", file);

    try {
      const response = await api.post("/upload", formData);
      console.log("Arquivo enviado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
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
    <form onSubmit={(e) => handleUpload(e)} encType="multipart/form-data">
      <PerfilContainer>
        <div className="card">
          <label htmlFor="fileInput" className="profileImageContainer">
            <img className="profileImage" src={UserIcon} alt="" />
            <FontAwesomeIcon icon={faEdit} className="editIcon" />
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              name="userIcon"
              title="Upload de Avatar"
              style={{ display: "none" }}  
            />
          </label>
          <div className="textContainer">
            <p className="name">
              <input
                className="input"
                type="text"
                value={name}
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
                value={surname}
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
                value={username}
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
          {editMode && (
            <button type="button" onClick={handleSaveChanges} className="saveButton">
              Salvar Alterações
            </button>
          )}
        </div>
      </PerfilContainer>
    </form>
  );
};

export default Perfil;
