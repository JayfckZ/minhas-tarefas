import { useState } from "react"
import { useDispatch } from "react-redux"
import * as S from "./styles"
import * as enums from "../../utils/enums/Tarefa"
import { remover } from "../../store/reducers/tarefas"
import TarefaClass from "../../models/Tarefas"

type Props = TarefaClass

const Tarefa = ({ titulo, prioridade, status, descricao, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
