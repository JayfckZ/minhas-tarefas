import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { MainContainer, Titulo, Campo, BotaoSalvar } from "../../styles/"
import { Form, Opcoes, Opcao } from "./styles"
import * as enums from "../../utils/enums/Tarefa"
import { adicionar } from "../../store/reducers/tarefas"

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const adicionarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      adicionar({
        titulo,
        prioridade,
        status: enums.Status.PENDENTE,
        descricao
      })
    )
    navigate("/")
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={adicionarTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Nome da Tarefa"
        />
        <Campo
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          as="textarea"
          placeholder="Descrição da Tarefa"
        />
        <Opcoes>
          <p>Prioridade: </p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                id={prioridade}
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{" "}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar id="btnRegistro" type="submit">
          Registrar
        </BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
