import React , {useState , useRef, useEffect} from 'react'

const Display = (props) => {
    console.log('Display render')
    return (
        <p className='Display1'>Display Count : {props.data} </p>
    )
}

const Child1 = (props) => {
    
    const [count,setCount] = useState(0)
    // console.log([props , count])

    useEffect(() => {
        console.log('Cách 2')
    },[])

    // useEffect(() => {
    //     setCount(count + props.data)
    // }, [props])

    const handleAdd = () => setCount(count + 1)
    const handleSubtract = () => setCount(count - 1)
    console.log('Child 1 render')
    return (
        <div className='child1'>
            <h1>Child1</h1>
            <p>Count : {count}</p>
            <Display data = {props.data} />
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSubtract}>-</button>
        </div>
    )
}
const Child2 = (props) => {
    const numberRef = useRef(null)
    
    return (
        <div className='child2'>
            <h1>Child2</h1>
            NUMBER : <input ref={numberRef} type='number' placeholder='enter number' defaultValue={0} />
            <button onClick ={() => props.onAddNumber(numberRef.current.value)}>ADD NUMBER</button>
        </div>
    )
}

const ChildToChild = () => {
    const [count , setCount] = useState(0)
    const handleAddNumber = (dataFromChild) => {
        const numberData = parseInt(dataFromChild)
        setCount(numberData)
    }
  return (
    <div>
        <h1>ChildToChild</h1>
        <Child1 data={count}/>
        <Child2 onAddNumber={handleAddNumber}/>
    </div>
  )
}

export default ChildToChild