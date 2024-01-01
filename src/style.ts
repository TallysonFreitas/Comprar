import styled, { createGlobalStyle } from 'styled-components'

export const ContainerGlobal = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const EstiloGlobal = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    list-style:none;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color:#ddd;
  }`

export const ContainerPadrao = styled.div`
  max-width: 1440px;
  width: 100%;
`
