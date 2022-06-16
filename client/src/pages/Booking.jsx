import { useState, useEffect, React } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'

const Booking = (props) => {
  const bookingId = useParams()
  const [booking, setBooking] = useState({})
  const { name, numberOfKids, pickUp, dropOff, bath, startTime, hours, notes } = booking




const getBooking = () => {
  axios.post('booking/getBooking', bookingId)
  .then(booking => {
    setBooking(booking.data)
  })
  .catch(err => console.log(err))
}

useEffect(() => {
  getBooking()
},[])


  return (
    <>
      <h1>{name}</h1>
      <p>Number of kids:{numberOfKids}</p>
      {pickUp ? (<div><p>Pickup </p><input checked="checked" type="checkbox" onclick="return false;" /></div>) : (<div><p>Pickup </p><input disabled type="checkbox" onclick="return false;" /></div>)}
      {bath ? (<div><p>Bath </p><input checked="checked" type="checkbox" onclick="return false;" /></div>) : (<div><p>Bath </p><input disabled type="checkbox" onclick="return false;" /></div>)}
      {dropOff ? (<div><p>Drop Off </p><input checked="checked" type="checkbox" onclick="return false;" /></div>) : (<div><p>Drop Off </p><input disabled type="checkbox" onclick="return false;" /></div>)}
      <p>Start Time and Date:{startTime}</p>
      <p>Hours: {hours}</p>
      <p>Notes: {notes}</p>
    </>
  )
}

export default Booking
