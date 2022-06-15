const router = require("express").Router();
const User = require('../models/User.model')


router.post('/addUserDetails', (req,res,next) => {
const  {
  userId, sitter, phoneNumber, email, location, bio, profilePicture, rate, referal
} = req.body

  User.findByIdAndUpdate(userId, {
    sitter, phoneNumber, email, location, bio, profilePicture, rate, referal
  }, { new: true })
    .then(booking => {
      res.status(200).json(booking)
    })
    .catch(err => next(err))
})



module.exports = router;
