import { Provider } from "react-redux"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EstiloGlobal, { Container } from "./styles"
import store from "./store"
import Home from "./pages/Home/"
import NovaTarefa from "./pages/NovaTarefa/"

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/novo",
    element: <NovaTarefa />
  },
  {
    path: "/helloworld",
    element: <h1>Hello World!</h1>
  }
])

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </div>
  )
}

export default App
