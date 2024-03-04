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

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [companyInfo, setCompanyInfo] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [programmingLanguages, setProgrammingLanguages] = useState<string[]>([]);
  const [deadline, setDeadline] = useState("");

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      title,
      subtitle,
      isPaid,
      price,
      photos,
      companyInfo,
      categories,
      programmingLanguages,
      deadline,
    });
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
    setPhotos([...photos, ...Array.from(e.target.files || [])]);
  };

  const handleCompanyInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCompanyInfo(e.target.value);
  };

  const handleCategoriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategories(e.target.value.split(","));
  };

  const handleProgrammingLanguagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgrammingLanguages(e.target.value.split(","));
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(e.target.value);
  };

  return (
    <CreatePostContainer>
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
          <Label class="checkbox-container">
            Remunerado:
            <Input
              class="custom-checkbox"
              type="checkbox"
              checked={isPaid}
              onChange={handleIsPaidChange}
            />
            <span class="checkmark"></span>
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
          <Label htmlFor="companyInfo">Informações da Empresa:</Label>
          <TextArea
            id="companyInfo"
            value={companyInfo}
            onChange={handleCompanyInfoChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="categories">Categorias:</Label>
          <Input
            type="text"
            id="categories"
            value={categories.join(",")}
            onChange={handleCategoriesChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="programmingLanguages">Linguagens de Programação:</Label>
          <Input
            type="text"
            id="programmingLanguages"
            value={programmingLanguages.join(",")}
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

