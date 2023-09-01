import { React } from 'react'
import {Link} from 'react-router-dom'
import Adminside from '../AdminSidebar/Adminside'

const AdminHome = ({isloggedIn}) => {

  return (
    <div className="container">
      <Adminside/>
      <div className="content">
        {!isloggedIn ? (
          <>
          <p className='login_para'>Please log in to see the booked appointments.</p>
           
          </>
        ) : (
          <>
          <div className='home_container'>

          <h1 className='tagline'>Health Care Hospital Admin Dashborad</h1>
          <Link to='/adminbookings'  className='book-btn'>See Appointments</Link>

          </div>
          
          </>
          
        )}
      </div>
    </div>
  )
}

export default AdminHome
