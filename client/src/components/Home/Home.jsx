import { React, useState } from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const Home = ({isloggedIn}) => {

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        {!isloggedIn ? (
          <>
          <p className='login_para'>Please log in to book the appointment.</p>
           
          </>
        ) : (
          <>
          <div className='home_container'>

          <h1 className='tagline'>Welcome to Health Care Hospital</h1>
          <p className='home_para'>Book your appointment with your doctor in 1 min</p>
          <Link to='/appointment'  className='book-btn'>Book</Link>

          </div>
          
          </>
          
        )}
      </div>
    </div>
  )
}

export default Home
