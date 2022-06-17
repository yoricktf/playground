import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import  axios from "axios";

const Dashboard = (props) => {
  const navigate = useNavigate()
  const [allBookings, setAllBookings] = useState([])

const goToNewBooking = () => {
  navigate('newBooking')
}

const getAllBookings = () => {
  axios.get('booking/getAllBookings')
  .then(bookings => {

    setAllBookings(bookings.data)
  })
}


console.log(Date());



useEffect(() => {
  getAllBookings()
}, [])

  return (
    <div>

      <h1>dashboard</h1>
      <ol>
        <li>SITTER show recent jobs and give something to search ore jobs</li>
        <li>PARENT a button to create a booking</li>
        <li>PARENT/SITTER show old jobs/bookings</li>
      </ol>

{allBookings.filter(booking => {
  if (booking.parent == props.user._id) {
    return booking
  }
}).map(booking => (
  <a href={`/booking/${booking._id}`} key={booking._id}> <h1>{booking.name}</h1></a>
)) }


      {props.user.sitter ?
        (<>
          <h1>Sitter</h1>
          <ul>
            <li>show jobs in DATE and no Sitter confirmed</li>
            <li>show jobs you have applied to</li>
            <li>show jobs you have been hired for</li>
          </ul>
        </>)
        :
        (<>
          <h1>Parent</h1>
          <ul>
            <li>past and present bookings</li>
            <li>search sitters and reccomend your jobs to them</li>
          </ul>
          <button onClick={goToNewBooking}>new booking</button>
        </>)
      }
    </div>
  )
}

export default Dashboard
