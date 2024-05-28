import { Provider } from "react-redux"
import BarraLateral from "./containers/BarraLateral"
import ListaDeTarefas from "./containers/ListaDeTarefas"
import EstiloGlobal, { Container } from "./styles"
import store from "./store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <BarraLateral />
          <ListaDeTarefas />
        </Container>
      </Provider>
    </div>
  )
}

export default App
