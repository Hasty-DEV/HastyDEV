import { useState, useCallback, useEffect } from "react";
import {
  CreatePostContainer,
  Form,
  FormGroup,
  Label,
  Input,
  FileInput,
  TextArea,
  Button,
} from "../../ui/styles/CreatePost/CreatePost.styles";
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
  const [photos, setPhotos] = useState<string>("");
  const [companyContent, setcompanyContent] = useState("");
  const [categories, setCategories] = useState<string>("");
  const [programmingLanguages, setProgrammingLanguages] = useState<string>("");
  const [deadline, setDeadline] = useState("");


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


  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (userData?.role === "user") {  
      Swal.fire({
        icon: "error",
        title: "Acesso Negado",
        text: "Usuários comuns não têm permissão para criar posts.",
      });
      return;
    }
    const confirmed = await confirmSubmission();
    if (confirmed) {
      setLoading(true);
      try {
        const userId = localStorage.getItem("userId");
        const userToken = localStorage.getItem("userToken");
        const response = await api.post("/posts", {
          id: userId,
          token: `Bearer ${userToken}`,
          title,
          subtitle,
          isPaid,
          price,
          photos,
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

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubtitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value);
  };

  const handleIsPaidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPaid(e.target.checked);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handlePhotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotos(Array.from(e.target.files || []).join(","));
  };

  const handlecompanyContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setcompanyContent(e.target.value);
  };

  const handleCategoriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategories(e.target.value);
  };

  const handleProgrammingLanguagesChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProgrammingLanguages(e.target.value);
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(e.target.value);
  };

  return (
    <CreatePostContainer className="d-flex justify-content-center align-items-center">
      {loading && <div>Carregando...</div>}
      <Form onSubmit={handleFormSubmit}>
        <FormGroup className="position-relative">
          <Label className="d-block" htmlFor="title">Título:</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="w-100"
          />
        </FormGroup>
        <FormGroup className="position-relative">
          <Label className="d-block" htmlFor="subtitle">Subtítulo:</Label>
          <Input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={handleSubtitleChange}
            required
            className="w-100"
          />
        </FormGroup>
        <FormGroup className="position-relative">
          <Label className="checkbox-container d-block">
            Remunerado:
            <Input
              className="custom-checkbox w-100"
              type="checkbox"
              checked={isPaid}
              onChange={handleIsPaidChange}
            />
            <span className="checkmark"></span>
          </Label>
        </FormGroup>
        {isPaid && (
          <FormGroup className="position-relative">
            <Label className="d-block" htmlFor="price">Preço:</Label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
              required
              className="w-100"
            />
          </FormGroup>
        )}
        <FormGroup className="position-relative">
          <Label className="d-block" htmlFor="photos">Fotos do projeto:</Label>
          <FileInput
            type="file"
            id="photos"
            multiple
            onChange={handlePhotosChange}
            className="w-100"
          />
        </FormGroup>
        <FormGroup className="position-relative">
          <Label className="d-block" htmlFor="companyContent">Informações da Empresa:</Label>
          <TextArea
            id="companyContent"
            value={companyContent}
            onChange={handlecompanyContentChange}
            required
            className="w-100"
          />
        </FormGroup>
        <FormGroup className="position-relative">
          <Label className="d-block" htmlFor="categories">Categorias:</Label>
          <Input
            type="text"
            id="categories"
            value={categories}
            onChange={handleCategoriesChange}
            required
            className="w-100"
          />
        </FormGroup>
        <FormGroup className="position-relative">
          <Label className="d-block" htmlFor="programmingLanguages">
            Linguagens de Programação:
          </Label>
          <Input
            type="text"
            id="programmingLanguages"
            value={programmingLanguages}
            onChange={handleProgrammingLanguagesChange}
            required
            className="w-100"
          />
        </FormGroup>
        <FormGroup className="position-relative">
          <Label className="d-block" htmlFor="deadline">Prazo:</Label>
          <Input
            type="date"
            id="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
            required
            className="w-100"
          />
        </FormGroup>
        <Button type="submit" className="d-block w-100">Criar Post</Button>
      </Form>
    </CreatePostContainer>
  );
};

export default CreatePost;
