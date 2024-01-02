import React, { useReducer } from 'react'

export const context = React.createContext()

const initialStore = {
    username:'',
    email:'',
    password:''
}
const reducer = (store , action) => {
    if (action.type === 'CHANGE_USERNAME'){
        return (
            {
                ...store,
                username: action.payload
            }
        )
    }
    if (action.type === 'CHANGE_PASSWORD'){
        return (
            {
                ...store,
                password: action.payload
            }
        )
    }
    if (action.type === 'CHANGE_EMAIL'){
        return (
            {
                ...store,
                email: action.payload
            }
        )
    }
    if (action.type === 'CLEAR'){
        return (
            {
                
            }
        )
    }
    return store
}

const Provider = ({children}) => {
    const [store , dispatch] = useReducer(reducer , initialStore)


  return (
    <context.Provider value={{store,dispatch}}>
        {children}
    </context.Provider>
  )
}

export default Provider