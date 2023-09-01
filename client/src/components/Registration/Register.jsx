import {React, useState} from 'react'
import './register.css'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = ()=>{
    axios.post('http://localhost:5000/Auth/register', {
      firstname,
      lastname,
      email,
      password
    }).then(
      (response)=>{
        navigate('/login')
      }
      )

  }

  return (

    <>
    <div>
      <Sidebar/>
    </div>

    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="FirstName"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="LastName"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit' onClick={handleRegister}>Register</button>
    </div>
      
    </>
  )
}

export default Register
