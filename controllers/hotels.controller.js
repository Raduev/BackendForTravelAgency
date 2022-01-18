const Hotel = require("../models/Hotel.model");

module.exports.hotelController = {
  getHotels: async (req, res) => {
    try {
      const allHotels = await Hotel.find().populate("rooms comments");
      res.json(allHotels);
    } catch (e) {
      res.json(e.message);
    }
  },
  addHotel: async (req, res) => {
    try {
      const hotel = await Hotel.create({
        name: req.body.name,
        rating: req.body.rating,
        rooms: req.body.rooms,
        comments: req.body.comments,
      });
      res.json(hotel);
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteHotel: async (req, res) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id),
        res.json("Hotel has been deleted");
    } catch (e) {
      res.json(e.message);
    }
  },
  patchHotel: async (req, res) => {
    try {
      const hotels = await Hotel.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          rating: req.body.rating,
          rooms: req.body.rooms,
          comments: req.body.comments,
        },
        { new: true }
      );
      res.json(hotels);
    } catch (e) {
      res.json(e.message);
    }
  },
};
