import React , {useReducer ,useState} from 'react'


const initialUser = {
    username: '',
    password: ''
}

const reducer = (state , action) => {
    if(action.type === 'CHANGE_USERNAME') {
        return ({
            username: action.payload,
            password: state.password
        })
    }
    if(action.type === 'CHANGE_PASSWORD'){
        return ({
            username: state.username,
            password: action.payload
        })
    }
    
}
const FormWithReducer = () => { 
    const [user , dispatch] = useReducer(reducer, initialUser)

    const handleLogin = () => {
        console.log({user})
    }
    const handleChangeUsername = (event) => {
        const action = {
            type : 'CHANGE_USERNAME',
            payload : event.target.value
        }
        dispatch(action)
    }
    const handleChangePassword = (event) => {
        const action = {
            type : 'CHANGE_PASSWORD',
            payload : event.target.value
        }
        dispatch(action)
    }
console.log('Form with Reducer')
  return (
    <div>
        <h1>Login With Reducer</h1>
        Username : <input onChange={handleChangeUsername} value={user.username} autoFocus placeholder='enter username'/>
        <br/>
        <br/>

        Password : <input onChange={handleChangePassword} value={user.password} placeholder = 'enter password'/>
        <br/>
        <br/>

        <button onClick = {handleLogin}>Login</button>
    </div>
  )
}

export default FormWithReducer