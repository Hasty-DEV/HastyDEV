import  { useState, useCallback, useEffect, ChangeEvent, FormEvent } from "react";
import { CreatePostContainer, Form, FormGroup, Label, Input, FileInput, TextArea, Button } from "../../ui/styles/CreatePost/CreatePost.styles";
import Swal from "sweetalert2";
import { api } from "../../data/services/api";
import { getUserData } from "../../data/services/userService";

interface UserDataTypes {
  role: string;
}

const CreatePost = () => {
  const [userData, setUserData] = useState<UserDataTypes | null>(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [price, setPrice] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [companyContent, setCompanyContent] = useState("");
  const [categories, setCategories] = useState<string>("");
  const [programmingLanguages, setProgrammingLanguages] = useState<string>("");
  const [deadline, setDeadline] = useState("");
  const [userId, setUserId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const userToken = localStorage.getItem("userToken");

    api.defaults.headers.common["id"] = userId;
    api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;

    setUserId(userId ?? "");

    return () => {
      delete api.defaults.headers.common["id"];
      delete api.defaults.headers.common["Authorization"];
    };
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const user = await getUserData();
      setUserData(user);
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles);
      setFiles(filesArray);
    }
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setUploading(true);

    try {
 

      

      const formData = new FormData();
      files.forEach((file) => {
        formData.append(`files`, file);
    
      });
     
     
      const response = await api.post(`/upload-files/${userId}`, formData);
      setSuccessMessage("Arquivos enviados com sucesso.");
      console.log("Arquivos enviados com sucesso:", response.data);
    } catch (error) {
      setError("Erro ao enviar os arquivos. Por favor, tente novamente.");
      console.error("Erro ao enviar os arquivos:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (userData?.role === "user") {
      Swal.fire({
        icon: "error",
        title: "Acesso Negado",
        text: "Usuários comuns não têm permissão para criar posts.",
      });
      return;
    }
 
 
      setLoading(true);
      try {
        const userToken = localStorage.getItem("userToken");
        const response = await api.post("/posts", {
          id: userId,
          token: `Bearer ${userToken}`,
          title,
          subtitle,
          isPaid,
          price,
          companyContent,
          categories,
          programmingLanguages,
          deadline,
        });

        console.log("Resposta do servidor:", response.data);
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Suas alterações foram realizadas com sucesso",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
        setLoading(false);
      }
 
  };

  const confirmSubmission = async () => {
    const result = await Swal.fire({
      title: "Você tem certeza?",
      text: "Deseja realmente fazer o post?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Cancelar",
    });
    return result.isConfirmed;
  };


  const handleBothActions = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setUploading(true);
  
    try {
      const confirmed = await confirmSubmission();
  
      if (confirmed) {
        await handleUpload(e);
        await handleFormSubmit(e);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Seu post foi realizado com sucesso!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      setError("Erro ao enviar os arquivos ou o formulário. Por favor, tente novamente.");
      console.error("Erro ao enviar os arquivos ou o formulário:", error);
    } finally {
      setUploading(false);
    }
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubtitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value);
  };

  const handleIsPaidChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsPaid(e.target.checked);
  };

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleCompanyContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCompanyContent(e.target.value);
  };

  const handleCategoriesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategories(e.target.value);
  };

  const handleProgrammingLanguagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProgrammingLanguages(e.target.value);
  };

  const handleDeadlineChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDeadline(e.target.value);
  };

  return (
    <CreatePostContainer className="d-flex justify-content-center align-items-center">
      {loading && <div>Carregando...</div>}
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label htmlFor="title">Título:</Label>
          <Input type="text" id="title" value={title} onChange={handleTitleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subtitle">Subtítulo:</Label>
          <Input type="text" id="subtitle" value={subtitle} onChange={handleSubtitleChange} required />
        </FormGroup>
        <FormGroup>
          <Label className="checkbox-container">
            Remunerado:
            <Input type="checkbox" checked={isPaid} onChange={handleIsPaidChange} />
            <span className="checkmark"></span>
          </Label>
        </FormGroup>
        {isPaid && (
          <FormGroup>
            <Label htmlFor="price">Preço:</Label>
            <Input type="number" id="price" value={price} onChange={handlePriceChange} required />
          </FormGroup>
        )}
        <FormGroup>
          <Label htmlFor="files">Fotos do projeto:</Label>
          <FileInput type="file" id="files" name="files" multiple onChange={handleFileChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="companyContent">Informações da Empresa:</Label>
          <TextArea id="companyContent" value={companyContent} onChange={handleCompanyContentChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="categories">Categorias:</Label>
          <Input type="text" id="categories" value={categories} onChange={handleCategoriesChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="programmingLanguages">Linguagens de Programação:</Label>
          <Input type="text" id="programmingLanguages" value={programmingLanguages} onChange={handleProgrammingLanguagesChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="deadline">Prazo:</Label>
          <Input type="date" id="deadline" value={deadline} onChange={handleDeadlineChange} required />
        </FormGroup>
        <Button type="submit" onClick={handleBothActions} className="d-block w-100">{uploading ? "Enviando..." : "Enviar"}</Button>

        {error && <div style={{ color: "red" }}>{error}</div>}
        {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      </Form>
    </CreatePostContainer>
  );
};

export default CreatePost;
