const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  User: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  Room: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Room",
  },
  Hotel: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Hotel",
  },
  Tur: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Tur",
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
