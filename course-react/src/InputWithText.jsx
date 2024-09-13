import { useState } from 'react'
import './InputWithText.css'



function InputWitText() {
  //useState tem que ficar sempre em cima é conhecida como top-level declaration
  //quando você for declarar um estado(useState) a sintaxe sempre vai ser a mesma const[valor, função que permite que mude o valor do estado] = useState('')
  const [inputValue, setInputValue] =  useState('')

  function onChangeHandler(event){
    setInputValue(event.target.value)
    console.log(inputValue)
  }


    return (
      <div className="container">
        <input type="text" placeholder="Digite aqui..." onChange={onChangeHandler} />
        <h1>{inputValue}</h1>
      </div>
    )

}

export default InputWitText