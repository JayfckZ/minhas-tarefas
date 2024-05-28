import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import * as enums from "../../utils/enums/Tarefa"
import Tarefa from "../../models/Tarefas"

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: "Estudar Python",
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: "Estudar e implementar a biblioteca NumPy."
    },
    {
      id: 2,
      titulo: "Estudar React/Redux",
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      descricao: "Estudar e implementar Redux no React."
    },
    {
      id: 3,
      titulo: "Finalizar trabalho sobre Grafos",
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      descricao: "Finalizar apresentação sobre Matrizes Incidentes."
    }
  ]
}
const tarefasSlice = createSlice({
  name: "tarefas",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...(state.itens = state.itens.filter(
          (tarefa) => tarefa.id !== action.payload
        ))
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
