import { HeadingSubInterTitle, Paragraph } from "../../components/Texts/Texts";
import { TableContainer } from "../../styles/Table/Table.styles";

const OurColaborationTable = () => {
  return (
    <TableContainer>
      <table className="tabela-transparente">
        <tbody>
          <tr>
            <td className="tabela">
              <HeadingSubInterTitle SubInterTitle="Inovação" />
            </td>
            <td>
              <Paragraph
                paragraph="Na HastyDEV, a inovação é nossa força motriz. Buscamos
                    constantemente soluções criativas para enfrentar desafios e
                    moldar o futuro."
              />
            </td>
          </tr>
          <tr>
            <td className="tabela">
              <HeadingSubInterTitle SubInterTitle="Excelência" />
            </td>
            <td>
              <Paragraph
                paragraph="Comprometidos com a excelência em tudo o que fazemos, na
                    HastyDEV. Buscamos a mais alta qualidade em cada aspecto do
                    nosso trabalho."
              />
            </td>
          </tr>
          <tr>
            <td className="tabela">
              <HeadingSubInterTitle SubInterTitle="Impacto" />
            </td>
            <td>
              <Paragraph
                paragraph="O impacto é o coração da nossa missão na HastyDEV. Unimos
                    desenvolvedores a organizações sociais e empresas para causar
                    mudanças positivas."
              />
            </td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
  );
};

export default OurColaborationTable;
