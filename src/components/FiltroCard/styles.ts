import { styled } from "styled-components"

type propStyle = {
  ativo: boolean
}

export const Card = styled.div<propStyle>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? "#1e90ff" : "#a1a1a1")};
  background-color: ${(props) => (props.ativo ? "white" : "#fcfcfc")};
  color: ${(props) => (props.ativo ? "#1e90ff" : "#5e5e5e")};
  border-radius: 8px;
  cursor: pointer;
  transition: outline 0.1s;

  &:hover {
    outline: 4px solid
      ${(props) =>
        props.ativo ? "rgba(30, 144, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  }
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.label`
  font-size: 14px;
`
