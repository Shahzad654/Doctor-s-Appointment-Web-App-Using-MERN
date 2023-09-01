import { React, useState } from 'react'
import './login.css'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Login = ({setIsLoggedIn}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try{
      axios.post('http://localhost:5000/Auth/login',{
        email,
        password
      })
    .then(
      (response)=>{
      if(response.data=='Success')
      {
        setIsLoggedIn(true)
        navigate('/')
      }
      else{
        alert("Incorrect password or email")
      }

    })

    }

    catch(err){
      console.log(err)
    }
    
  };

  return (
   <>
    <div>
      <Sidebar/>
    </div>

    <div className="login-container">
      <h2>Login</h2>
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
      <button type='submit' onClick={handleLogin}>Login</button>
      <Link to='/adminlogin'>Login as admin</Link>

    </div>
    </>
  );
};

export default Login;
