import {data} from "./data/data"

import { useState } from 'react'
import './App.css'
import ImcCalc from './components/ImcCalc'
import ImcTable from "./components/ImcTable"

function App() {

  const calcImc =(e,height,weight)=>{
    e.preventDefault()

    if(!weight || !height) return // se a largura ou altura não chegarem retorna
  const weightFloat = +weight.replace(",", ".") // trocar a , por .
  const heightFloat = +height.replace(",", ".")

  const imcResult = (weightFloat/(heightFloat * heightFloat)).toFixed(1) // um número depois do ponto

   setImc(imcResult) // para aparecer o resultado
   data.forEach((item)=>{
    if(imcResult >= item.min && imcResult <= item.max){
     setInfo(item.info)
     setInfoClass(item.infoClass)
    }
   })
   if(!info) return
  }

  const resetCalc = (e)=>{
    e.preventDefault()
    setImc("")
    setInfo("")
    setInfo("")
  }
  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return (
    <div className="container">
         {!imc ? (
          <ImcCalc calcImc={calcImc}/>
         ): (
          <ImcTable  data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>
         )}
    </div>
  )
}

export default App
