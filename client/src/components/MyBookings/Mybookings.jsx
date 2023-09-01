import React, { useState, useEffect } from 'react';
import './mybookings.css';
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

const Mybookings = ({ isloggedIn }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/Appoint/getBooking');
        setBookings(response.data);
      } 
      catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Sidebar />

      {isloggedIn ? (
        <>
        <div className="booking_container">
          <h1 className="booking_heading">My Appointments</h1>

          <ul className="booking_list">
            {bookings.map((book) => (
              <li key={book._id} className="booking_item">
                <div className="booking_doctor">Doctor Name: {book.doctor}</div>
                <div className="booking_patient">Patient Name: {book.patientname}</div>
                <div className="booking_date">Appointment Date: {book.date}</div>
                <div className="booking_time">Appointment Time: {book.time}</div>
              </li>
            ))}
          </ul>
        </div>
        </>
      ) : (
        <p className='book_para'>Please Login or Register to see your Appointments </p>
      )}
    </>
  )
}

export default Mybookings;
