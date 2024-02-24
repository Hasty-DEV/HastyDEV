import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { api } from "../../data/services/api";

const Perfil: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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

  return (
    <form onSubmit={(e) => handleUpload(e)} encType="multipart/form-data">
      <h1>Enviar Arquivo</h1>
      <input
        type="file"
        onChange={handleFileChange}
        name="userIcon"
        title="Upload de Avatar"
        disabled={uploading}
      />
      <button type="submit" disabled={uploading}>
        {uploading ? "Enviando..." : "Enviar"}
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
    </form>
  );
};

export default Perfil;
