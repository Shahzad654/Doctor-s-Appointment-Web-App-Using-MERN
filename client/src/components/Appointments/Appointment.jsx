import {React, useState} from 'react'
import './appointment.css'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Appointment = ({isloggedIn}) => {
  const [doctor, setDoctor] = useState('')
  const [patientname, setPatientName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const navigate = useNavigate()

  const handleBook = async ()=>{

    try{
      const response = await axios.post('http://localhost:5000/Appoint/booking', {
        doctor,
        patientname,
        date,
        time,
      })
      navigate('/myappointment')
            

    }
    catch(err){
      console.error("Axios Error:", err);
    }
   
  }



  return (
    <>
    <Sidebar/>
    {isloggedIn ? (
      <>
       <div className="login-container">
      <h1>Appointment</h1>
    
    <select name="" id="" className='docotor_options' 
    onChange={(e)=>{
      setDoctor(e.target.value)
    }}>
    <option value="doc">Select Doctor</option>
      <option value="Dr. Ali">Dr. Ali</option>
      <option value="Dr. Ahmad">Dr. Ahmad</option>
      <option value="Dr. Asif">Dr. Asif</option>
      <option value="Dr. Babar">Dr. Babar</option>
    </select>

    <input type="text" placeholder='Patient Name'
    onChange={(e)=>{
      setPatientName(e.target.value)
    }}/>

    <input type="date" placeholder='date' 
    onChange={(e)=>{
      setDate(e.target.value)
    }}/>

<input type="time" placeholder='Time' 
    onChange={(e)=>{
      setTime(e.target.value)
    }}/>

    <button type="submit" onClick={handleBook}>Book</button>

    </div>
      </>
    ) : (
      <>
      <p className='book_para'>Please Login or Register to Book Appointment </p>
      </>
    )}
   
    </>
  )
}

export default Appointment