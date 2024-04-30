import { HeadingSubInterTitle, Paragraph } from "../../components/Texts/Texts";
import { TableContainer } from "../../styles/Table/Table.styles";

const OurMissionTable = () => {
  return (
    <TableContainer>
      <table className="tabela-transparente mb-3">
        <tbody>
          <tr>
            <td className="tabela">
              <HeadingSubInterTitle SubInterTitle="Colaboração" />
            </td>
            <td>
              <Paragraph
                paragraph="Promovemos a união de talentos para criar um impacto positivo.
                  Facilitamos a colaboração entre desenvolvedores e organizações
                  sociais/empresas parceiras, tornando ideias em ações."
              />
            </td>
          </tr>
          <tr>
            <td className="tabela">
              <HeadingSubInterTitle SubInterTitle="Gamificação" />
            </td>
            <td>
              <Paragraph
                paragraph="Tornamos o aprendizado e o trabalho envolventes e divertidos
                  com sistemas de recompensas. Motivamos os desenvolvedores a se
                  desafiarem e contribuírem para projetos de impacto."
              />
            </td>
          </tr>
          <tr>
            <td className="tabela">
              <HeadingSubInterTitle SubInterTitle="Profissionalismo" />
            </td>
            <td>
              <Paragraph
                paragraph="Valorizamos o desenvolvimento profissional com
                    responsabilidade e ética. Garantimos que os desenvolvedores
                    adquiram experiência valiosa e que as organizações parceiras
                    recebam suporte técnico qualificado."
              />
            </td>
          </tr>
          <tr>
            <td className="tabela">
              <HeadingSubInterTitle SubInterTitle="Impacto Social" />
            </td>
            <td>
              <Paragraph
                paragraph="Nosso propósito é causar mudanças sociais positivas.
                    Trabalhamos com organizações sociais e empresas parceiras para
                    resolver desafios sociais. Acreditamos na transformação de
                    vidas e comunidades."
              />
            </td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
  );
};

export default OurMissionTable;
