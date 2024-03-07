import { useState, ChangeEvent, FormEvent, useEffect, useCallback } from "react";
import { api } from "../../data/services/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import DefaultUserIcon from "../../ui/assets/user/user_icon.png";
import PerfilContainer from '../../ui/styles/perfil/Perfil.styles';
import { getUserIcon } from "../../data/services/getUserIconService";
import { getUserData } from "../../data/services/userService";
import swal from "sweetalert2";

const Perfil: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [userIcon, setUserIcon] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const userToken = localStorage.getItem("userToken");

    api.defaults.headers.common["id"] = userId;
    api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;

    setUserId(userId ?? "")

    return () => {
      delete api.defaults.headers.common["id"];
      delete api.defaults.headers.common["Authorization"];
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const user = await getUserData();
      setName(user.first_name);
      setSurname(user.last_name);
      setUsername(user.username);
      const icon = await getUserIcon();
      if (icon && icon.data) {
        setUserIcon(URL.createObjectURL(new Blob([icon.data])));
      }
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    }
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewImage(null);
    }
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
      const response = await api.post(`/upload/${userId}`, formData);
      setSuccessMessage("Arquivo enviado com sucesso.");
      console.log("Arquivo enviado com sucesso:", response.data);
    } catch (error) {
      setError("Erro ao enviar o arquivo. Por favor, tente novamente.");
      console.error("Erro ao enviar o arquivo:", error);
    } finally {
      setUploading(false);
      window.location.reload()
    }
  };

  const handleSaveChanges = async () => {
    if (userId === null || userId === "") {
      console.error("ID do usuário não está definido.");
      return;
    }

    setEditMode(false);
    try {
      await api.put(`/user/${userId}`, { first_name: name, last_name: surname, username });
      console.log("Alterações salvas com sucesso!");
  
      fetchData();
       window.location.reload()
       swal.fire({
        position: "center",
        icon: "success",
        title: "Suas alterações foram realizadas com sucesso",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      
      console.error("Erro ao salvar alterações:", error);
    }
  };

  return (
    <PerfilContainer>
      <form onSubmit={(e) => handleUpload(e)} encType="multipart/form-data">
        <div className="card">
          <label htmlFor="fileInput" className="profileImageContainer">
            <img className="profileImage" src={previewImage || userIcon || DefaultUserIcon} alt="" />
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!editMode}
              />
              {!editMode && (
                <button type="button" onClick={() => setEditMode(true)} className="edit-button">
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
                <button type="button" onClick={() => setEditMode(true)} className="edit-button">
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
                <button type="button" onClick={() => setEditMode(true)} className="edit-button">
                  <FontAwesomeIcon icon={faEdit} className="editValues" />
                </button>
              )}
            </p>
          </div>

          <button type="submit" disabled={uploading} className="saveButton" onClick={handleSaveChanges}>
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
