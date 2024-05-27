import * as S from "./styles"
import Tarefa from "../../components/Tarefa"

const tarefas = [
  {
    titulo: "Estudar Python",
    prioridade: "Importante",
    status: "Pendente",
    descricao: "Estudar e implementar a biblioteca NumPy."
  },
  {
    titulo: "Estudar React/Redux",
    prioridade: "Importante",
    status: "Pendente",
    descricao: "Estudar Redux."
  },
  {
    titulo: "Trabalho sobre Grafos",
    prioridade: "Urgente",
    status: "Pendente",
    descricao: "Finalizar apresentação sobre Matrizes Incidentes."
  }
]

const ListaDeTarefas = () => (
  <S.Container>
    <p>2 tarefas marcadas como: &quot;Categoria&ldquo; e &quot;Termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
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

export default ListaDeTarefas
