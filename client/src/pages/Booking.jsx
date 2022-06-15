import { useEffect, React } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'

const Booking = (props) => {
  const bookingId = useParams()

  // console.log(bookingId)

const getBooking = () => {
  console.log('FRONTEND---------------------------------');
  axios.post('booking/getBooking', bookingId)
.then(booking => {
  console.log(booking)
})
}

useEffect(() => {
  getBooking()
})



// console.log(props)

  return (
    <div>Booking</div>
  )
}

export default Booking
