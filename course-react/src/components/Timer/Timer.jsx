import { useState, useEffect } from "react"
//os dois ciclos de vida mais comuns são quando ele se monta e quando ele desmonta
//sempre que tiver use na frente é uma hook
export default function Timer(){
 
  const[time, setTime] = useState(10)

  useEffect(function() {
   const interval = setInterval(function() {
    setTimee(time - 1)
   }, 1000)
   return function() {
    clearInterval(interval)
   }
  })//como primeiro parametro ela recebe um callback, uma função
  
  return (
      <div>
        {time}
        </div>
  )
}