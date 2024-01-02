import React , {useEffect , useState} from 'react'
import axios from 'axios'
import {Card} from 'antd'
import './Axios.css'

export const API_URL = 'http://localhost:8080/api/v1';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const Axios = () => {
  const [users , setUsers] = useState([])
  

  const fetchData = () => {
    axios('http://localhost:8080/api/v1/cars')
    .then((response)=>{
      const data = response.data
      console.log(data)
      setUsers(data)
    })
    .catch((error)=>{})
  }

  const updateData = () => {
    // axios(url,config)
    axios('http://localhost:8080/api/v1/cars',{
      method : 'put',
      data : {

      }
    })
  }

  const postData = () => {
    axios('http://localhost:8080/api/v1/phones',{
      method : 'post',
      data : {
        
      }
    })
  }

  const deleteData = (id) => {
    axios(`http://localhost:8080/api/v1/cars/${id}`, {
      method : 'delete'
    })
  }
  const loginHandle = () => {}

  useEffect (fetchData , [])
  return (
    <div className='Axios'>
      <h1>User List</h1>
      <div className='user-list'>
     
    {
    users.map(user => {
      return ( 
        <Card title={user.name} bordered={false} style={{ width: 300 }}>
        <p>Name : {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
        <p>Address : {`${user.address.suite} - ${user.address.street} - ${user.address.city}`}</p>
      </Card>
      )
    })
    }
    </div>
    Username: <input/>
    Password: <input/>
    <button onClick ={loginHandle}>Login</button>
    {/* <button onClick ={updateData}>UPDATE</button>
    <button onClick ={postData}>POST</button>
    <button onClick ={deleteData} >DELETE</button>  */}
    </div>
  )
}

export default Axios