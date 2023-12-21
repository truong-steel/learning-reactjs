import React , {useState} from 'react'

const ChildComponent = (props) => {
    console.log({props})
    return (
        <p>Count : {props.data} </p>
    )
}

const ParentToChild = () => {
    const [count , setCount] = useState(0)
    const handleAdd = () => setCount(count + 1)
    const handleSubtract = () => setCount(count-1)
  return (
    <div>
        <h1>ParentToChild</h1>
        <ChildComponent data ={count} title = 'child' name='name'/>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
    </div>
  )
}

export default ParentToChild