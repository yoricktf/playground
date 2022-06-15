const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const bookingSchema = new Schema(
  {
    parent: { type: ObjectId, ref: "User" },
    kids: { type: ObjectId, ref: "Kid" },
    name: String,
    pickUp: Boolean,
    dropOff: Boolean,
    bath: Boolean,
    startTime: Date,
    hours: Number,
    notes: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Booking = model("Booking", bookingSchema);

module.exports = Booking;
