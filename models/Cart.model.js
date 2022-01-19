const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  user: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  }],
  room: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Room",
  }],
  hotel: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Hotel",
  }],
  tur: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Tur",
  }],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
