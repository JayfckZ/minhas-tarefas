import BotaoAdd from "../../components/BotaoAdd"
import BarraLateral from "../../containers/BarraLateral"
import ListaDeTarefas from "../../containers/ListaDeTarefas"

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdd />
  </>
)

export default Home
