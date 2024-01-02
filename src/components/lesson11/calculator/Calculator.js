import React , { useState } from 'react'
import './Calculator.css'
import Display from '../../display/Display'

const Calculator = () => {
const [count , setCount] = useState(0)

const handleAdd = () => {
   const newCount = count + 1 ;
    setCount(newCount);
}

const handleSub = () => {
   const newCount = count - 1 ;
    setCount(newCount);
}
  return (
    <div>
        <p><h1>Calculator</h1></p>
        <Display data = {count} />
        <button onClick={handleAdd}>+</button>
        <button disabled={count === 0} onClick={handleSub}>-</button>
    </div>
  )
}

export default Calculator