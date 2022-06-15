import React from 'react'

const NewBooking = (props) => {

  console.log(props)

const makeBooking = (e) => {
  e.preventDefault()
  console.log('buttons working')
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
