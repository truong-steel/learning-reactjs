import React , {useState} from 'react'

export const Context = React.createContext()

const initialStore = {
    count : 0,
    username : '',
    password : ''
}

const Provider = ({children}) => {
    const [store , setStore] = useState(initialStore)

    return (
        <Context.Provider value={{store, setStore}}>{children}</Context.Provider>
    )
}

export default Provider;