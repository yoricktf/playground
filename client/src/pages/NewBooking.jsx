import { React, useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const NewBooking = (props) => {
  const navigate = useNavigate()
  const [name, setName] = useState(`${props.user.username}'s Booking`)
  const [numberOfKids, setNumberOfKids] = useState(1)
  const [pickUp, setPickUp] = useState(false)
  const [dropOff, setDropOff] = useState(false)
  const [bath, setBath] = useState(false)
  const [startTime, setstartTime] = useState()
  const [hours, setHours] = useState(0)
  const [notes, setNotes] = useState('')
  const [applicants, setApplicants] = useState()
  const [hired, setHired] = useState()
  const [parent, setParent] = useState(props.user._id)


const makeBooking = (e) => {
  e.preventDefault()
  console.log('buttons working')
  axios.post('booking/makeBooking', { parent, name, numberOfKids, pickUp, dropOff, bath, startTime, hours, notes, applicants, hired});
  navigate('/dashboard')
}

  return (
    <>
      <h1>form for making a booking</h1>
      <form onSubmit={makeBooking}>
        <label>Name:
            <input type="text" placeholder={name} onChange={e => setName(e.target.value)}/>
        </label>
        <label>Number of Kids:
            <input type="number" min="1" onChange={e => setNumberOfKids(e.target.value)}/>
        </label>
        <label>Start Time:
            <input type="Datetime-local" onChange={e => setstartTime(e.target.value)}/>
        </label>
        <label>Length (in Hours):
            <input type="number" min="0.5" step='0.5' onChange={e => setHours(e.target.value)}/>
        </label>
        <label>Pick Up:
            <input type="checkbox"  onChange={e => setPickUp(e.target.checked)}/>
        </label>
        <label>Drop Off:
            <input type="checkbox" onChange={e => setDropOff(e.target.checked)}/>
        </label>
        <label>Bath:
            <input type="checkbox" onChange={e => setBath(e.target.checked)}/>
        </label>
        <label>Notes:
            <textarea cols="25" rows="3" onChange={e => setNotes(e.target.value)}/>
        </label>
        <button type="submit">making a new booking</button>
      </form>
    </>
  )
}

export default NewBooking
