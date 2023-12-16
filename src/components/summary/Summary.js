import { useState , useEffect } from "react"
import React from 'react'
import './Summary.css'
const Display = (props) => {
    console.log({props})
    return (
        <p className ={`${props.data !== 0? 'Display' : 'disabled' }`}> Count : {props.data}
        </p>
    )
}
const Summary = () => {
  console.log('first')
    const [count , setCount] = useState(0)
    const [message , setMessage] = useState('')

    const handleAdd = () => setCount(count + 1);
    const handleSub = () => setCount(count - 1);

    const handleSet = () => setMessage('Truong');
    const handleClear = () => setMessage('');

    const callback1 = () => {
      console.log('Always run when mounting and updating');
  }

  const callback2 = () => {
      console.log('Only run when when mounting state');
  }

  const callback3 = () => {
      console.log('Only run when mounting and changing dependencies');
  }

  useEffect(callback1)
  useEffect(callback2 , [])
  useEffect(callback3,[count])

  console.log('second')

  return (
    <div>
      {console.log('return UI')}
    <h1>Summary</h1>
    {/* Calculator */}
    <div className='Calculator'>
    <Display data = {count} />
    <button onClick={handleAdd}>+</button>
    <button disabled={count === 0} onClick={handleSub}>-</button>
    </div>
    <hr/>
    <div className="Message">
      <p>{message}</p>
      <button onClick={handleSet}>Set Message</button>
      <button onClick={handleClear}>Clear Message</button>

    </div>

    {/* Form with Ref  */}
    <div className='Form-With-useRef'></div>
    <hr/>

    {/* Form with state  */}
    <div className='Form-With-useState'></div>
    <hr/>

    {/* Form with reducer */}
    <div className='Form-With-useReducer'></div>
    <hr/>

  </div>
  )
}

export default Summary