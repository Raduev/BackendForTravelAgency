const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  rooms: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Room",
    required: true,
  },
  comments: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comment",
    },
  ],
  img: {
      type: String
  }
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
