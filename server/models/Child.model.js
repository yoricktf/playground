const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const kidSchema = new Schema(
  {
    parent: { type: ObjectId, ref: "User" },
    gender: String,
    allergies: Array,
    age: Date,
    notes: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Kid = model("Kid", kidSchema);

module.exports = Kid;
