import React, { useState } from 'react'

//B1 : Tạo context
export const context = React.createContext()
//B2 : Tạo provider
//B3 : Tạo state dùng chung



const Provider = ({children}) => {
    const [count , setCount] = useState(10)

  return (
    <context.Provider value={{count,setCount}}>
        {children}
    </context.Provider>
  )
}

export default Provider