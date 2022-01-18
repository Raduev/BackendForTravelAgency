const Room = require('../models/Room.model')
module.exports.roomController = {
    getRooms: async (req,res) => {
    try {
      const rooms = await  Room.find()
      res.json(rooms)
    } catch (e) {
      console.log(e)
    }
    },
  addRoom: async (req,res) => {
      try {
       await  Room.create({
         numberOfRooms: req.body.numberOfRooms,
         hotelRoom: req.body.hotelRoom
       })
        res.json('Комната создана')
      } catch (e) {
        console.log(e)
      }
  },
  removeRoom: async (req, res) => {
      try {
        await Room.findByIdAndRemove(req.params.id)
        res.json('Комната удалена')
      } catch (e) {
        console.log(e)
      }
  },
  patchRoom: async (req, res) => {
      try {
      const patchRoom = await Room.findByIdAndUpdate(req.params.id, {
          numberOfRooms: req.body.numberOfRooms,
          hotelRoom:req.body.hotelRoom
        })
        res.json(patchRoom)
      } catch (e) {
        console.log(e)
      }
  }
}
