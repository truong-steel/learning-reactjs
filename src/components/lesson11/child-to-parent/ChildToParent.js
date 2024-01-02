import React , {useState , useRef} from 'react'

const ChildComponent = (props) => {
    console.log({props})
    const numberRef = useRef(null)
    const {
        onAdd , 
        onSubtract,
        onAddNumber
    } = props
    
    return (
        <div>
            <button onClick={onAdd}>+</button>
            <button onClick={onSubtract}>-</button>
            NUMBER :<input ref={numberRef} type='number' defaultValue={0}/>
            <button onClick={() => onAddNumber(numberRef.current.value)}>ADD NUMBER</button>
        </div>
    )
}

const ChildToParent = () => {
    const [count , setCount] = useState(0)

    const handleAdd = () => setCount(count + 1)
    const handleSubtract = () => setCount(count - 1)
    const handleAddNumber = (dataFromChild) => {
        console.log({dataFromChild})
        const numberValue = parseInt(dataFromChild)
        setCount(count + numberValue)
    }
    

  return (
    <div>
        <h1>ChildToParent</h1>
        <p>Count : {count}</p>
        <ChildComponent onAdd={handleAdd} onSubtract={handleSubtract} onAddNumber={handleAddNumber}/>
    </div>
  )
}

export default ChildToParent