import { useSelector } from "react-redux"
import * as S from "./styles"
import Tarefa from "../../components/Tarefa"
import { RootReducer } from "../../store"

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <S.Container>
      <p>
        2 tarefas marcadas como: &quot;Categoria&ldquo; e &quot;Termo&ldquo;
      </p>
      <ul>
        {itens.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaDeTarefas
