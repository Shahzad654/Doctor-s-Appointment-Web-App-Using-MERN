import { React, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Adminside from '../AdminSidebar/Adminside'

const Admin = ({setIsLoggedIn}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try{
      axios.post('http://localhost:5000/Admin/adminlogin',{
        email,
        password
      })
    .then(
      (response)=>{
      if(response.data=='Success')
      {
        setIsLoggedIn(true)
        navigate('/h')

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
    <Adminside/>
   </div>

    <div className="login-container">
      <h2>Login as Admin</h2>
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
      <Link to='/login'>Login as User</Link>

    </div>
    </>
  );
};

export default Admin;
