import { Link } from "react-router-dom"
import { styled } from "styled-components"
import variaveis from "../../styles/variaveis"

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  text-decoration: none;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  transition: all 0.4s ease;
  // border: none;

  &:hover {
    background-color: #fff;
    color: ${variaveis.verde};
    outline: 8px solid rgb(68, 189, 50, 0.3);
    // border: 3px solid ${variaveis.verde};
  }
`
