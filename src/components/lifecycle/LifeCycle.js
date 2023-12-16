import React, {useState, useEffect} from 'react'
import './LifeCycle.css'
import Display from '../display/Display'

const LifeCycle = () => {
    console.log('first')
    const [count , setCount] = useState(0)
    const [name , setName] = useState('')

    const handleAdd = () => {
        const newCount = count + 1 
        setCount(newCount)
    }
    const handleSub = () => {
        const newCount = count - 1
        setCount(newCount)
    }
    const isZero = count === 0;

    const handleSet = () => setName('Trường')

    const handleClear = () => setName('')

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
        <h1>LifeCycle</h1>
        <p className ={`${!isZero ? 'count' : 'disabled'}`}>Count: {count}</p>
        {!isZero && <Display data ={count} /> }
        <button onClick={handleAdd}>ADD</button>
        <button disabled = {isZero} onClick={handleSub}>SUB</button>
        <p>Name : {name} </p>
        <button onClick={handleSet}>SET NAME</button>
        <button onClick={handleClear}>CLEAR NAME</button>
        </div>
  )
}

export default LifeCycle