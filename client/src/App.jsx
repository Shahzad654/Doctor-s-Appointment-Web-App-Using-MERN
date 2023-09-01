import {React, useState} from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Adminbook from './components/AdminBookings/Adminbook'
import AdminHome from './components/AdminHome/AdminHome'
import Admin from './components/AdminLogin/Admin'
import Appointment from './components/Appointments/Appointment'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Mybookings from './components/MyBookings/Mybookings'
import Register from './components/Registration/Register'

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false)

  return (
    <>

    <Routes>
      <Route path='/' element={<Home isloggedIn = {isloggedIn}/>}/>
      <Route path='/appointment' element={<Appointment isloggedIn = {isloggedIn}/>}/>
      <Route path='/myappointment' element={<Mybookings isloggedIn = {isloggedIn}/>}/>
      <Route path='/login' element={<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/adminlogin' element={<Admin setIsLoggedIn = {setIsLoggedIn}/>}/>
      <Route path='/h' element={<AdminHome isloggedIn = {isloggedIn}/>}/>
      <Route path='/adminbookings' element={<Adminbook isloggedIn = {isloggedIn}/>}/>
    </Routes>
  
    </>
  )
}

export default App
