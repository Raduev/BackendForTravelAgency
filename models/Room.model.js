const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
  numberOfRooms:  Number,
  img: String
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room
