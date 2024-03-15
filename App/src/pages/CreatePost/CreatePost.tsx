import { useState } from "react";
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
import { api } from "../../data/services/api";

const CreatePost = () => {
  const [loading, setLoading] = useState(false); // Estado para controlar o estado de carregamento do envio do formulário
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState<string>(""); // Alterado para string
  const [companyContent, setcompanyContent] = useState("");
  const [categories, setCategories] = useState<string>(""); // Alterado para string
  const [programmingLanguages, setProgrammingLanguages] = useState<string>(""); // Alterado para string
  const [deadline, setDeadline] = useState("");

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
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
      // Lógica para lidar com a resposta do servidor após o envio do formulário

      setLoading(false); // Atualiza o estado de carregamento para false após o envio bem-sucedido
      window.location.reload(); // Atualiza a página após o envio bem-sucedido
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      setLoading(false); // Atualiza o estado de carregamento para false em caso de erro
    }
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
    setPhotos(Array.from(e.target.files || []).join(",")); // Alterado para string separada por vírgula
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
    <CreatePostContainer>
      {loading && <div>Carregando...</div>} {/* Mostra uma mensagem de carregamento se o estado de carregamento estiver true */}
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label htmlFor="title">Título:</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subtitle">Subtítulo:</Label>
          <Input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={handleSubtitleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label className="checkbox-container">
            Remunerado:
            <Input
              className="custom-checkbox"
              type="checkbox"
              checked={isPaid}
              onChange={handleIsPaidChange}
            />
            <span className="checkmark"></span>
          </Label>
        </FormGroup>
        {isPaid && (
          <FormGroup>
            <Label htmlFor="price">Preço:</Label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </FormGroup>
        )}
        <FormGroup>
          <Label htmlFor="photos">Fotos do projeto:</Label>
          <FileInput
            type="file"
            id="photos"
            multiple
            onChange={handlePhotosChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="companyContent">Informações da Empresa:</Label>
          <TextArea
            id="companyContent"
            value={companyContent}
            onChange={handlecompanyContentChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="categories">Categorias:</Label>
          <Input
            type="text"
            id="categories"
            value={categories}
            onChange={handleCategoriesChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="programmingLanguages">
            Linguagens de Programação:
          </Label>
          <Input
            type="text"
            id="programmingLanguages"
            value={programmingLanguages}
            onChange={handleProgrammingLanguagesChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="deadline">Prazo:</Label>
          <Input
            type="date"
            id="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
            required
          />
        </FormGroup>
        <Button type="submit">Criar Post</Button>
      </Form>
    </CreatePostContainer>
  );
};

export default CreatePost;
