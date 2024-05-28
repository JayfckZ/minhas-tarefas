import { useDispatch, useSelector } from "react-redux"
import FiltroCard from "../../components/FiltroCard"
import * as S from "./styles"
import { RootReducer } from "../../store"
import { alteraTermo } from "../../store/reducers/filtro"

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar..."
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="Pendentes" contador={1} />
          <FiltroCard legenda="Concluídas" contador={1} />
          <FiltroCard legenda="Urgentes" contador={1} />
          <FiltroCard legenda="Importantes" contador={1} />
          <FiltroCard legenda="Normal" contador={1} />
          <FiltroCard legenda="Todas" contador={1} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
