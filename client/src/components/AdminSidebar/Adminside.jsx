import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.jpg'

const Adminside = () => {
  return (
    <>

    <div className="sidebar_container">

        <img src={Logo} alt="" className='logo' />
        
        <li>
            <Link to='/h' className='side_menu'>Home</Link> 
        </li>

        <li>
            <Link to='/adminbookings' className='side_menu'>Booked Appointment</Link> 
        </li>

         <li>
            <Link to='/adminlogin' className='side_menu'>Login</Link>
         </li>
    
    </div>

    </>
  )
}

export default Adminside
