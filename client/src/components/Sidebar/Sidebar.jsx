import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
import {FaFacebook, FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'
import Logo from '../../assets/logo.jpg'

const Sidebar = () => {
  return (
    <>

    <div className="sidebar_container">

        <img src={Logo} alt="" className='logo' />
        
        <li>
            <Link to='/' className='side_menu'>Home</Link> 
        </li>

        <li>
            <Link to='/appointment' className='side_menu'>Book Appointment</Link> 
        </li>

        <li>
            <Link to='/myappointment' className='side_menu'>My Appointment</Link> 
        </li>

         <li>
         <Link to='/login' className='side_menu'>Login</Link>
 
         </li>
 
         <li>
         <Link to='/register' className='side_menu'>Register</Link>
 
         </li>
    
       

        <div className="footer">
        <FaFacebook style={
            {width: '20px', height: '20px', color: 'blue', paddingLeft: '30px', cursor: 'pointer'}
            }/>
        <FaTwitterSquare style={
            {width: '20px', height: '20px', color: 'black', paddingLeft: '30px', cursor: 'pointer'}
            }/>
        <FaInstagramSquare style={
            {width: '20px', height: '20px', color: 'orangered', paddingLeft: '30px', cursor: 'pointer'}
            }/>

        <h3>Copyright@HCH2023</h3>
        </div>

    </div>

    </>
  )
}

export default Sidebar
