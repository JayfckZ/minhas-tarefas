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
      titulo: "Minha Tarefa",
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      descricao:
        "Adicione, edite ou remova tarefas de sua lista. Adicione filtros de prioridade e dê atenção a elas! Você pode pesquisar por filtro, status ou nome."
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
    },
    adicionar: (state, action: PayloadAction<Omit<Tarefa, "id">>) => {
      const tarefaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaExiste) {
        alert("Já existe uma tarefa com esse nome.")
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, adicionar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
