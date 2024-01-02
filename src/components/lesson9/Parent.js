import React, { useEffect, useRef, useState } from 'react'
import { Button, Flex } from 'antd';

const Child1 = (props) => {
    const [count , setCount] = useState(0)

    const numberRef = useRef(null)

    const handleAdd = () => setCount(count+1)
    const handleSubtract = () => setCount(count-1)
    const handleAddNumber = () => {const inputNumber = parseInt(numberRef.current.value)
        setCount(count + inputNumber)}

    useEffect(()=> {
        props.onAdd(count)
    },[count])

    return (
        <div className='Child1'>
            <h1>Calculator</h1>
            <p>Count : {count} </p>
            <Button type="primary" onClick={handleAdd}>+ </Button>
            <Button type="primary" onClick={handleSubtract}>-</Button>
            <input ref={numberRef} placeholder='enter number here' type='number' />
            <Button type="primary" onClick ={handleAddNumber}>ADD NUMBER</Button>
            
        </div>
    )
}

const Child2 = (props) => {
    console.log('Child 2 props:' , props )
    return (
        <p className = 'Child2'> Count : {props.data} </p>
    )
}

const Parent = () => {
    const [temp , setTemp] = useState(0)

    const handleAddFromChild = (dataFromChild) => setTemp(dataFromChild)
  return (
    <div>
        <h1>Parent</h1>
        <Child1 onAdd ={handleAddFromChild}/>
        <Child2 data = {temp}/>
    </div>
  )
}

export default Parent