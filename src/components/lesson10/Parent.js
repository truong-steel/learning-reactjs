import { Button } from 'antd'
import React, { useContext, useRef } from 'react'
import { Dispatch } from 'react'
import {context} from './Provider'
import Provider from './Provider'
import NumCalculator from 'antd/es/theme/util/calc/NumCalculator'

const UserDetails = () => {
    const {store} = useContext(context)
    return (
        <div className='UserDetails'>
        <p>Username : {store.username}</p>
        <p>Password : {store.password}</p>
        <p>Email : {store.email}</p>
        </div>
    )
}

const RegisterForm = () => {
    const {dispatch} = useContext(context)
    // const storeData = useContext(context)
    // console.log({storeData})

    const usernameRef  = useRef(null)
    const passwordRef = useRef(null)
    const emailRef = useRef(null)
  
    const handleUsername = () => {
        const newUsername = usernameRef.current.value
        const action = {
            type : 'CHANGE_USERNAME',
            payload: newUsername
        }
        dispatch(action)
    }
    const handlePassword = () => {
        const newPassword = passwordRef.current.value
        const action = {
            type: 'CHANGE_PASSWORD',
            payload: newPassword
        }
        dispatch(action)
    }
    const handleEmail = () => {
        const newEmail = emailRef.current.value
        const action = {
            type: 'CHANGE_EMAIL',
            payload: newEmail
        }
        dispatch(action)
    }
    const handleClear = () => {
        const clearForm = null
       const action = {
        type : 'CLEAR',
        payload : clearForm
       }
       dispatch(action)
    }
    const handleRefresh = () => {
        
    }
  return (
  
        <div>
        <h1>Form</h1>
        <div>
        Username : <input ref={usernameRef} placeholder ='ENTER USERNAME . . .'/>
        <Button onClick ={handleUsername}>Change Username</Button>
        </div>
        <div>
        <br/>

        Password : <input ref={passwordRef} placeholder ='ENTER PASSWORD . . .'/>
        <Button onClick={handlePassword}>Change Password</Button>
        </div>
        <div>
        <br/>

        Email : <input ref={emailRef} placeholder ='ENTER EMAIL . . .'/>
        <Button onClick={handleEmail}>Change Email</Button>
        </div>
        <br/>

        <Button onClick={handleClear}>Clear</Button>
        <Button onClick={handleRefresh}>Refresh</Button>
        <UserDetails/>
    </div>
    
  )
}

export default RegisterForm