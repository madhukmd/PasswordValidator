import {useState} from 'react'
import {
  Container,
  Content,
  Heading,
  Paragraph,
  Input,
  Error,
} from './styledComponents'

const PasswordValidator = () => {
  const [text, setText] = useState('')

  const changePassword = event => setText(event.target.value)
  const error = text.length < 8

  return (
    <Container>
      <Content>
        <Heading>Password Validator</Heading>
        <Paragraph>check how strong and secure is your password </Paragraph>
        <Input type="password" value={text} onChange={changePassword} />
        {error && <Error>Your password must be at least 8 characters</Error>}
      </Content>
    </Container>
  )
}
export default PasswordValidator
