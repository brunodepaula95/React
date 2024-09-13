import { useState } from 'react'
import Input from '../../components/Input/Input'
import './Register.css'

function RegisterPage(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function onEmailChangeHandler(event){
    setEmail(event.target.value)
  }

  function onPasswordChangeHandler(event){
    setPassword(event.target.value)
  }

  function onConfirmPasswordChangeHandler(event){
    setConfirmPassword(event.target.value)
  }


  function onSubmitHandler(event){
    event.preventDefault()
    alert('test')
  }

  return(
    <div className="register-container">
      <form className="register-form" onSubmit={onSubmitHandler}>
        <Input 
          label="Email"
          inputValue={email}
          onChange={onEmailChangeHandler} 
        />

        <Input
          label="Senha"
          inputValue={password}
          onChange={onPasswordChangeHandler}
        />

        <Input
          label="Confirmar Senha"
          inputValue={confirmPassword}
          onChange={onConfirmPasswordChangeHandler}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default RegisterPage