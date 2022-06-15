import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

const goto = e => {
  console.log('tttttttttttttttttttt');
  navigate('newBooking')
}


  return (
    <div>
    <h1>dashboard</h1>
    <ol>
        <li>show details of the user</li>
        <li>SITTER show recent jobs and give something to search ore jobs</li>
        <li>PARENT a button to create a booking</li>
        <li>PARENT/SITTER show old jobs/bookings</li>
    </ol>
      <button onClick={goto}>new booking</button>
    </div>
  )
}

export default Dashboard
