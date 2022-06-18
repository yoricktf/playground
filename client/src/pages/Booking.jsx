import { useState, useEffect, React } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'

const Booking = (props) => {
  const { sitter, _id } = props.user
  const booking_id = useParams().booking_id
  const [booking, setBooking] = useState({})
  const [applicant, setApplicant] = useState(_id)
  const { name, numberOfKids, pickUp, dropOff, bath, startTime, hours, notes, applicants } = booking

console.log(applicants);





// NEED TO GET THE RETURN RESULT NOW ABOUT THE LIST OF HIRED PEOPLE TO SHOW UP ON THE PAGE

const applyForBooking = () => {
  // console.log(applicants)
  axios.post('booking/applyForJob', {booking_id, applicants: applicant })
//   .then(booking => {
// console.log(booking);
//   })
    .catch(err => console.log(err))
}

useEffect(() => {
  // getBooking()
  const getBooking = () => {
    axios.post('booking/getBooking', { booking_id })
      .then(booking => {
        setBooking(booking.data)
      })
      .catch(err => console.log(err))
  }
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
{/* {applicants.filter(applicant => {
  <h1>applicant: {applicant}</h1>
})} */}

      {sitter &&
        <>
        <button onClick={applyForBooking}>apply for job</button>
        </>
      }
    </>
  )
}

export default Booking
