const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
  numberOfRooms:  Number,
  hotelRoom: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Hotel'
  }
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room
