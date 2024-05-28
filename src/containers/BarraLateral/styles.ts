import { styled } from "styled-components"

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;

  @media (width <= 767px) {
    height: 303px;
    border-radius: 0 0 16px 16px;
  }
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  color: #666;
  border-color: #666;
  width: 100%;
`
