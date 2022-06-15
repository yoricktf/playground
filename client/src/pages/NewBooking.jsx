import { React, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const NewBooking = (props) => {
  const [name, setName] = useState('')
  const [numberOfKids, setNumberOfKids] = useState(1)
  const [pickUp, setPickUp] = useState(false)
  const [dropOff, setDropOff] = useState(false)
  const [bath, setBath] = useState(false)
  const [startTime, setstartTime] = useState()
  const [hours, setHours] = useState(0)
  const [notes, setNotes] = useState('')

  console.log(props)

const makeBooking = (e) => {
  e.preventDefault()
  console.log('buttons working')
  axios.post('booking/makeBooking')
}








  return (
    <>
    <h1>form for making a booking</h1>
    <form onSubmit={makeBooking}>
      <label>Name:
        <input type="text" />
      </label>
        <label>Number of Kids:
          <input type="number" min="1"/>
        </label>
        <label>Start Time:
          <input type="Datetime-local" />
        </label>
        <label>Length (in Hours):
          <input type="number" min="0.5" step='0.5'/>
        </label>
      <label>Pick Up:
        <input type="checkbox" />
      </label>
      <label>Drop Off:
        <input type="checkbox" />
      </label>
      <label>Bath:
        <input type="checkbox" />
      </label>
      <label>Notes:
          <textarea cols="25" rows="3"/>
      </label>
<button type="submit">making a new booking</button>

    </form>
    </>
  )
}

export default NewBooking
