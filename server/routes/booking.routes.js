const router = require("express").Router();
const Booking = require('../models/Booking.model')

router.post('/makeBooking', (req,res,next) => {
  const { parent, name, numberOfKids, pickUp, dropOff, bath, startTime, hours, notes, applicants, hired } = req.body
  Booking.create({ parent, name, numberOfKids, pickUp, dropOff, bath, startTime, hours, notes, applicants, hired})
    .then(booking => {
      res.status(200).json(booking)
    })
    .catch(err => next(err))
})

router.post('/getBooking', (req,res,next) => {
  // console.log(req.body);
  const booking_Id = req.body.booking_id
  // console.log( 'booking id:',booking_Id);
  Booking.findById(booking_Id)
    .populate('applicants')
    .then(booking => {
      res.status(200).json(booking)
    })
    .catch(err => console.log(err))
})

router.get('/getAllBookings', (req,res,next) => {
  Booking.find()
  .then(bookings => {
    res.status(200).json(bookings)
    console.log(bookings)
  })
})

router.post('/applyForJob', (req,res,next) => {
  // console.log( 'this is the body-----------' ,req.body);
  // console.log('this is working now here here here here here eherer');
  const {booking_id, applicants} = req.body
  console.log('these are the applicants',applicants);
  console.log('booking ID ____________________',booking_id);

  Booking.findByIdAndUpdate(booking_id, { $addToSet: {applicants} }, { new: true })
  .then(booking => {
    res.status(200).json(booking)
  })
  .catch(error => console.log(error));
})


module.exports = router;
