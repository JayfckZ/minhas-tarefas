import * as S from "./styles"
import Tarefa from "../../components/Tarefa"

const ListaDeTarefas = () => (
  <S.Container>
    <p>2 tarefas marcadas como: &quot;Categoria&ldquo; e &quot;Termo&ldquo;</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </S.Container>
)

export default ListaDeTarefas
