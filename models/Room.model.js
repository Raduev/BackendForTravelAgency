const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
  numberOfRooms:  Number,
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room
