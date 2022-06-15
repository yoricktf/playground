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


module.exports = router;
