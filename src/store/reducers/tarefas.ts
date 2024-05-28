import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import * as enums from "../../utils/enums/Tarefa"
import Tarefa from "../../models/Tarefas"

const tarefasSlice = createSlice({
  name: "tarefas",
  initialState: [
    new Tarefa(
      "Estudar Python",
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      "Estudar e Implementar a biblioteca NumPy.",
      1
    ),
    new Tarefa(
      "Estudar React/Redux",
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      "Estudar e Implementar Redux no React.",
      2
    ),
    new Tarefa(
      "Finalizar trabalho sobre Grafos",
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      "Finalizar apresentação sobre Matrizes Incidentes.",
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
