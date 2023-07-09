import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #24263c;
`

export const Content = styled.div`
  background: #383a4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  width: 90%;
  max-width: 400px;
  height: 300px;
  border-radius: 5px;
`
export const Heading = styled.h1`
  font-family: Roboto;
  color: #ffff;
`
export const Paragraph = styled.p`
  font-family: Roboto;
  font-size: 16px;
  color: #ffff;
`

export const Input = styled.input`
  height: 35px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 4px;
  padding-left: 10px;
`
export const Error = styled.p`
  font-family: Roboto;
  font-size: 11px;
  color: #ef4444;
`
