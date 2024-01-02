import React, { useContext } from 'react'
import Provider, { Context } from './Context'


const Calculator = () => {
    const {store,setStore} = useContext(Context)
    
    console.log('Calculator')
    // console.log({storeData})

    const handleAdd = () => {
        const newStore = {
            count: store.count + 1,
            username: store.username,
            password: store.password
        }
        setStore(newStore)
    }

    // const handleAdd = () => setStore({
    //     ...store,
    //     count: store.count + 1

    // })

    const handleSubtract = () => {
        const newStore = {
            count: store.count - 1 ,
            username: store.username,
            password: store.password
        }
        setStore(newStore)
    }

    return (
        <div className='Calculator'>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleSubtract}>SUBTRACT</button>
        </div>
    )
}
const Display = () => {
    const {store} = useContext(Context)
    const count = store.count 
    console.log('Display')
    console.log({store})
    return (
        <p className='Display'>Count : {count}</p>
    )
}
const Parent = () => {
  return (
     <Provider>
        <Calculator/>
        <Display/>
     </Provider>
  )
}

export default Parent