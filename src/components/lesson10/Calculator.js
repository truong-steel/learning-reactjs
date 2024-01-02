import React, { useMemo, useRef, useState , useCallback } from 'react'
import { Button } from 'antd'

// const Display = (props) => {
//     return (
//         <p className='Display'>Intro :{props.data}</p>
//     )
// }
const Display = React.memo((props) => {
    console.log('render display component')
    return ( 
        <>
        <p className='Display'>Intro :{props.data}</p>
        <Button onClick={props.onMultiple}>Multiple by 2</Button>
        </>
        
    )
})

// const Child1 = (props) => {
    
//     return (
//         <div className='Child1'>
//                 {props.data.map(item => (
//                    <h3>{item}</h3> 
//                 ))}
            
//         </div>
//     )
// }
const Child2 = React.memo((props) => {
    console.log('first')
    return (
        <div className='Child2'>
            
        </div>
    )
})

const Calculator = () => {
    const [count , setCount] = useState(0)
    const [inputNumber ,setInputnumber ] = useState(0)
    const [intro , setIntro] = useState('')
    
    const handleAdd = () => setCount(count + 1)
    const handleSubtract = () => setCount(count - 1)
    const handleAddNumber = () => setCount(count + inputNumber)
    const handleChangeNumber = (e) => setInputnumber(parseInt(e.target.value))
    
    const clear = () => setCount(0)
    const handleChangeIntro = (e) => setIntro(e.target.value)

    // useCallback giúp tránh việc 1 function bị khai báo lại
    const handleMultiple = useCallback(() => {
        console.log('Hello')
    },[] )

    // expensive logic 
    // useMemo -> giúp hạn chế thực hiện logic 
    // const updateValue = () => {
    // let x = 0 
    // for ( let i = 0 ; i < 1000000000 ; i++ ){
    //     x += count 
    // }
    // console.log('x')
    // }

    // // useMemo(() => {},[]) -> chạy trước giao diện hiển thị 
    // // useEffect => chạy sau khi giao diện hiển thị 
    // useMemo(updateValue , [count])
const arr = [1,2,3]
  return (
    <div>
        <h1>Calculator</h1>
        <p>Count : {count} </p>
        <Button onClick = {handleAdd}>+</Button>
        <Button onClick = {handleSubtract}>-</Button>
        <input onChange={handleChangeNumber} value={inputNumber} placeholder='enter number here . . .' type='number' />
        <Button onClick ={handleAddNumber}>Add Number</Button>
        <Button onClick ={clear}>Clear</Button>
        <input placeholder='enter intro here . . .' value={intro} onChange={handleChangeIntro} />
        <Display data ={intro} onMultiple={handleMultiple} />
        
        </div>
  )
}

export default Calculator