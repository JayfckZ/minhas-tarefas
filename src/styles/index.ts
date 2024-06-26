import styled, { createGlobalStyle } from "styled-components"
import variaveis from "./variaveis"

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }


`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (width <= 767px) {
    display: block;
  }
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  dislay: block;
  font-weight: bold;
  font-size: 18px;
  margin: 40px 0;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  color: #666;
  border-color: #666;
  width: 100%;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 8px;
  margin-right: 8px;

  @media (width <= 767px) {
    &#btnRegistro {
      width: 100%;
      padding: 8px 12px;
      font-size: 16px;
    }
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
