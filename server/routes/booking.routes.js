const router = require("express").Router();
const Booking = require('../models/Booking.model')

router.post('/makeBooking', (req,res,next) => {
  const { parent, name, numberOfKids, pickUp, dropOff, bath, startTime, hours, notes } = req.body
  Booking.create({ parent, name, numberOfKids, pickUp, dropOff, bath, startTime, hours, notes})
    .then(booking => {
      res.status(200).json(booking)
    })
    .catch(err => next(err))
})

router.post('/getBooking', (req,res,next) => {
  const booking_Id = req.body.booking_id
  console.log( 'booking id:',booking_Id);
  Booking.findById(booking_Id)
    .then(booking => {
      res.status(200).json(booking)
    })
    .catch(err => console.log(err))
})

router.get('/getAllBookings', (req,res,next) => {
  console.log(20 * '-');
  Booking.find()
  .then(bookings => {
    res.status(200).json(bookings)
    console.log(bookings)
  })
})


module.exports = router;
