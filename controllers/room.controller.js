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
         img: req.body.img
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
          img: req.body.img
        })
        res.json(patchRoom)
      } catch (e) {
        console.log(e)
      }
  },
  updateImg: async (req, res) =>{
      try{
        await Room.findByIdAndUpdate(req.params.id, {
          img: req.file.path
        })
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
      } catch (e) {
        console.log(e)
      }
  }
}
