const router = require("express").Router();
const User = require('../models/User.model')


router.post('/addUserDetails', (req,res,next) => {
const  { userId, sitter, phoneNumber, email, location, bio, profilePicture, rate, referal
} = req.body
  console.log("this is the request======>", bio);
  User.findByIdAndUpdate(userId, { sitter, phoneNumber, email, location, bio, profilePicture, rate, referal
  }, { new: true })
    .catch(error => next(error));
})



module.exports = router;
