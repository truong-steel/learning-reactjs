import { useState , useEffect , useRef , useReducer } from "react"
import React from 'react'
import './Summary.css'

const Display = (props) => {
    console.log({props})
    return (
        <p className ={`${props.data !== 0? 'Display' : 'disabled' }`}> Count : {props.data}
        </p>
    )
}
const initialUser = {
  username : '',
  password : ''
}
const reducer = (state , action) => {
  if( action.type === 'CHANGE_USERNAME' ) {
    console.log('first')
    return ({
      username: action.payload,
      password: state.password
    })
  }
  if( action.type === 'CHANGE_PASSWORD') {
    return ({
      username: state.username,
      password: action.payload 
    })
  }
  return(state)
}
const Summary = () => {
  console.log('first')
  
    const [count , setCount] = useState(0)
    const [message , setMessage] = useState('')
    const [user , dispatch] = useReducer(reducer , initialUser)

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const [username1 , setUsername] = useState('')
    const [password1 , setPassword] = useState('')

    const handleAdd = () => setCount(count + 1);
    const handleSub = () => setCount(count - 1);

    const handleSet = () => setMessage('Truong');
    const handleClear = () => setMessage('');

    

  // Handle Login UseRef
    const handleLogin1 = () => {
        console.log('username :', usernameRef.current.value ,
                    'password :', passwordRef.current.value
        )
    }
    // Handle Login UseState
    const handleLogin2 = () => {
      console.log({username1 , password1})
    }
    const handleChangeUsername = (event) => setUsername(event.target.value)
    const handleChangePassword = (event) => setPassword(event.target.value)

    // Handle Login UseReducer
    const handleLogin3 = () => {
      console.log({user})
    }
    const handleChangeUsername3 = (event) => {
      const action = {
        type : 'CHANGE_USERNAME',
        payload : event.target.value
    }
    dispatch(action)
  }
    const handleChangePassword3 = (event) => {
      const action = {
        type : 'CHANGE_PASSWORD',
        payload : event.target.value
    }
    dispatch(action)
  }
// useEffect
  // const callback1 = () => {
  //     console.log('Always run when mounting and updating');
  // }
  // const callback2 = () => {
  //     console.log('Only run when when mounting state');
  // }
  // const callback3 = () => {
  //     console.log('Only run when mounting and changing dependencies');
  // }
  // useEffect(callback1)
  // useEffect(callback2 , [])
  // useEffect(callback3,[count])

  console.log('second')

  return (
    <div>
      {console.log('show UI')}
    <h1>Summary</h1>
    {/* Calculator */}
    <div className='Calculator'>
    <Display data = {count} />
    <button onClick={handleAdd}>+</button>
    <button disabled={count === 0} onClick={handleSub}>-</button>
    </div>
    <hr/>
    <div className="Message">
      <p>{message}</p>
      <button onClick={handleSet}>Set Message</button>
      <button onClick={handleClear}>Clear Message</button>

    </div>

    {/* Form with Ref  */}
    <div className='Form-With-useRef'>
      <h2>Login with useRef</h2>
      Username : <input id='username1' ref={usernameRef} placeholder='enter username here . . .'/>
      Password : <input id='password1' ref={passwordRef} placeholder='enter password here . . .'/>
      <button onClick={handleLogin1}>Login</button>
    </div>
    <hr/>

    {/* Form with state  */}
    <div className='Form-With-useState'>
      <h2>Login with useState</h2>
      Username : <input id='username2' onChange={handleChangeUsername} placeholder='enter username here . . .' />
      Password : <input id='password2' onChange={handleChangePassword} placeholder='enter password here . . .' />
      <button onClick ={handleLogin2}>Login</button>
    </div>
    <hr/>

    {/* Form with reducer */}
    <div className='Form-With-useReducer'>
      <h2>Login with useReducer</h2>
      Username : <input id='username3' onChange={handleChangeUsername3} value={user.username} placeholder='enter username here . . .'/>
      Password : <input id='password3' onChange={handleChangePassword3} value={user.password} placeholder='enter password here . . .'/>
      <button onClick ={handleLogin3}>Login</button>
    </div>
    
  </div>
  )
}

export default Summary