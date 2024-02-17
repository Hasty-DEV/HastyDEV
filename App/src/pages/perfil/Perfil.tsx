import { useState, ChangeEvent, FormEvent } from "react";
import { api } from "../../data/services/api";

const Perfil: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

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

  return (
    <form onSubmit={(e) => handleUpload(e)} encType="multipart/form-data">
      <h1>Enviar Arquivo</h1>
      <input
        type="file"
        onChange={handleFileChange}
        name="userIcon"
        title="Upload de Avatar"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Perfil;
