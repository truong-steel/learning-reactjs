import React , {useState} from 'react'

const FormWithState = () => {
    const [username , setName] = useState('')
    const [password , setPassword] = useState('')
    const handleLogin = () => {
        console.log({username , password})
    }
    const handleChangeUsername = (event) => setName(event.target.value)
    const handleChangePassword = (event) => setPassword(event.target.value)
console.log('Form with State')
  return (
    <div>
        <h1>Login With State</h1>
        Username : <input onChange={handleChangeUsername} value={username} autoFocus placeholder='enter username'/>
        Password : <input onChange={handleChangePassword} value={password} placeholder = 'enter password'/>
        <button onClick = {handleLogin}>Login</button>
    </div>
  )
}

export default FormWithState