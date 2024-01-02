import React, {useEffect, useRef} from 'react'


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
        <h1>Login With Ref</h1>
        Username :<input id='username' ref={usernameRef} placeholder ='Enter Username here . . .'/>
        <br/>
        <br/>
        Password :<input id='password' ref={passwordRef} placeholder ='Enter Password here . . .'/>
        <br/>
        <br/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Form