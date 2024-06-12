import Loader from "../../ui/components/Loader/Loader";
import { Form, FormGroup, Label, Input, FileInput, TextArea, Button } from "../../ui/styles/CreatePost/CreatePost.styles";
import { useCreatePost } from "./useCreatePost";

const CreatePost = () => {
  const {
    loading,
    title,
    subtitle,
    isPaid,
    price,
    content,
    companyContent,
    categories,
    programmingLanguages,
    deadline,
    uploading,
    error,
    successMessage,
    handleBothActions,
    handleInputChange,
    handleFileChange,
  } = useCreatePost();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-2">
      {loading && <Loader />}
      <h2 className="text-center fs-2 fw-bold">Criar Post</h2>
      <Form onSubmit={handleBothActions}>
        <FormGroup>
          <Label htmlFor="title">Título:</Label>
          <Input type="text" id="title" name="title" value={title} onChange={handleInputChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subtitle">Subtítulo:</Label>
          <Input type="text" id="subtitle" name="subtitle" value={subtitle} onChange={handleInputChange} required />
        </FormGroup>
        <FormGroup>
          <Label className="checkbox-container">
            Remunerado:
            <Input type="checkbox" id="isPaid" name="isPaid" checked={isPaid} onChange={handleInputChange} />
            <span className="checkmark"></span>
          </Label>
        </FormGroup>
        {isPaid && (
          <FormGroup>
            <Label htmlFor="price">Preço:</Label>
            <Input type="number" id="price" name="price" value={price} onChange={handleInputChange} required />
          </FormGroup>
        )}
        <FormGroup>
          <Label htmlFor="content">Conteúdo:</Label>
          <TextArea id="content" name="content" value={content} onChange={handleInputChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="files">arquivos adicionais:</Label>
          <FileInput type="file" id="files" name="files" multiple onChange={handleFileChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="companyContent">Informações da Empresa:</Label>
          <TextArea id="companyContent" name="companyContent" value={companyContent} onChange={handleInputChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="categories">Categorias:</Label>
          <Input type="text" id="categories" name="categories" value={categories} onChange={handleInputChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="programmingLanguages">Linguagens de Programação:</Label>
          <Input type="text" id="programmingLanguages" name="programmingLanguages" value={programmingLanguages} onChange={handleInputChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="deadline">Prazo:</Label>
          <Input type="date" id="deadline" name="deadline" value={deadline} onChange={handleInputChange} required />
        </FormGroup>
        <Button type="submit" className="d-block w-100">{uploading ? "Enviando..." : "Enviar"}</Button>

        {error && <div style={{ color: "red" }}>{error}</div>}
        {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      </Form>
    </div>
  );
};

export default CreatePost;

