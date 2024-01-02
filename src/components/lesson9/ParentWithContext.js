import React, { useContext, useRef } from 'react'
import { Button, Flex , Input } from 'antd';
import Provider , {context} from './Provider';

const Child1 = () => {
    const {count , setCount} = useContext(context)
    const numberRef = useRef(null)

    const handleAdd = () => setCount(count+1)
    const handleSubtract = () => setCount(count-1)
    const handleAddNumber = () => {
        const inputNumber = parseInt(numberRef.current.value)
        setCount(count + inputNumber)
        }
    return (
        <div>
        <p>Count : {count}</p>
        <Button onClick = {handleAdd}>ADD</Button>
        <Button onClick ={handleSubtract}>SUBTRACT</Button>
        <Input ref={numberRef} placeholder ='enter number here ...' type='number'/>
        <Button type='primary' onClick={handleAddNumber}>ADD NUMBER</Button>
        </div>
    )
}

const Child2 = () => {
    const {count} = useContext(context)
    return (
        <p className='Child2'> Count : {count} </p>
    )
}


const ParentWithContext = () => {
    console.log('parent')
  return (
    <Provider>
        <div>
        <h1>ParentWithContext</h1>
        <Child1/>
        <Child2/>
    </div>
    </Provider>
    
  )
}

export default ParentWithContext