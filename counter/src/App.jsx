import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)


const addVal = () => {
  if(counter < 20){
    setCounter(counter + 1)
  }
}

const remVal = () => {
  if(counter > 0){
  setCounter(counter - 1)
  }
}
  return (
    <>
    <h1>Counter Which will update counts</h1>
    <h2>Counter value : {counter}</h2>
    <br />
    <button onClick={addVal}>Add value</button>
    <br /> <br />
    <button onClick={remVal}>Remove Value</button>
    </>
  )
}

export default App
