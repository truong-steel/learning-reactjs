import React, {useEffect, useRef} from 'react'
import './Form.css'

const Form = () => {
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const handleLogin = () => {
        console.log('username:', usernameRef.current.value ,
        'password:', passwordRef.current.value )
    }

// useEffect(() => {
//     console.log('usernameRef',usernameRef.current)
//     console.log('username', document.getElementById('username'))
// },[])
console.log('Form render')
  return (
    <div>
        <h2>Login</h2>
        Username<input id='username' ref={usernameRef} placeholder ='Enter Username here . . .'/>
        
        Password<input id='password' ref={passwordRef} placeholder ='Enter Password here . . .'/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Form