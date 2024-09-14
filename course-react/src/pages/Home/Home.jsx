import { useState } from 'react'
import Header from '../../components/Header/Header'
import './Home.css'

function HomePage(){
  const [showTimer, setShowTimer] = useState(true)


//header abaixo esta criando filhos a partir da props em HEADER.JSX
  return(
    <>
    <h1>Olá seja bem vindo</h1>
    {showTimer ? <Timer /> : null}
    <button onClick={function() {setShowTimer(!showTimer)}}>mostra/esconde</button>
    </>
  )
}

export default HomePage