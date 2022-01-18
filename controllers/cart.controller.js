const Cart = require("../models/Cart.model");
const jwt = require("jsonwebtoken");

module.exports.cartController = {
  getCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user.id });
      res.json(cart);
    } catch (error) {
      console.log(error.message);
    }
  },
  removeCart: async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Cart.findById(id);
      if (req.user.id !== cart.user.toString()) {
        return res.status(401).json("ошибка. Нет доступа");
      }
      if (cart.user.toString() === req.user.id) {
        await cart.remove();
        return res.json("Удалено");
      }
      return res.status(401).json("ошибка. Нет доступа");
    } catch (error) {
      console.log(error.message);
    }
  },
  patchCart: async (req, res) => {
    try {
      await Cart.findByIdAndUpdate(req.params.id, {
        user: req.body.user,
        room: req.body.room,
        tur: req.body.tur,
        hotel: req.body.hotel,
      });
      res.json("Корзина изменена");
    } catch (error) {
      res.json(error.message);
    }
  },
  cartToken: async (req, res) => {
    try {
      const { room, tur, hotel } = req.body;
      const { authorization } = req.headers;
      const [ type, token ] = authorization.split(" ");
      if (type !== "Bearer") {
        return res.status(400).json("Неверный тип токена");
      }
      const payload = await jwt.verify(token, process.env.SECRET_KEY);
      const cart = await Cart.create({
        user: payload.id,
        room,
        tur,
        hotel,
      });
      return res.json(cart);
    } catch (error) {
      res.status(401).json("Неверный токен");
    }
  },
};
