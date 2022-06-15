import { useState, useEffect, React } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'

const Booking = (props) => {
  const bookingId = useParams()
const [booking, setBooking] = useState({})

  const [name, setName] = useState()
  const [pickUp, setPickUp] = useState()
  const [dropOff, setDropOff] = useState()
  const [bath, setBath] = useState()
  const [startTime, setStartTime] = useState()
  const [hours, setHours] = useState()
  const [notes, setNotes] = useState()


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



// console.log(props)

  return (
    <>
      <h1>{booking.name}</h1>
    </>
  )
}

export default Booking
