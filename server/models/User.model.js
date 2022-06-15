const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    password: String,
    profilePicture: String,
    email: String,
    phoneNumber: String,
    location: Array,
    sitter: Boolean,
    rate: Number,
    referal: Number,
    bio: String,
    bookings: { type: ObjectId, ref: "Booking" },
    // kids: { type: ObjectId, ref: "Kid" },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
