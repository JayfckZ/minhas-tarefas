import FiltroCard from "../../components/FiltroCard"
import * as S from "./styles"

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar..." />
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

export default BarraLateral
