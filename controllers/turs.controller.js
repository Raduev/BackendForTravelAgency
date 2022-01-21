const Tur = require("../models/Tur.model");

module.exports.controllerTur = {
  postTur: async (req, res) => {
    try {
      const { from, to, data, night, amount, hotel, price, img} = req.body;
      const tur = await Tur.create({
        from: from,
        to: to,
        data: data,
        night: night,
        amount: amount,
        hotel: hotel,
        price: price,
        img: img
      });
      res.json(tur);
    } catch (e) {
      res.json(e);
    }
  },
  getTurs: async (req, res) => {
    try {
      const tur = await Tur.find().populate("hotel")
      res.json(tur);
    } catch (e) {
      res.json(e);
    }
  },
  deleteTur: async (req, res) => {
    try {
      const tur = await Tur.findByIdAndRemove(req.params.id);
      res.json(tur);
    } catch (e) {
      res.json(e);
    }
  },
  patchTur: async (req, res) => {
    try {
      const { from, to, data, night, amount, hotel, price, img } = req.body;
      const tur = await Tur.findByIdAndUpdate(req.params.id, {
        from: from,
        to: to,
        data: data,
        night: night,
        amount: amount,
        hotel: hotel,
        price: price,
        img: img
      });
      res.json(tur);
    } catch (e) {
      res.json(e);
    }
  },

  updateImg: async (req, res) => {
    try {
      await Tur.findByIdAndUpdate(req.params.id, {
        img: req.file.path
      })
      const tur = await Tur.findById(req.params.id)

      res.status(200).json(tur)
    } catch (e) {
      res.json(e)
    }
  },
  getByTur: async (req, res) => {
    try {
    const tur = await Tur.findById(req.params.id)
    res.json(tur)
    } catch (e) {
      res.json(e)
    }
  }
};
