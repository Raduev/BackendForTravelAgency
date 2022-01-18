const mongoose = require("mongoose");

const turSchema = mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  data: { type: String, required: true },
  night: { type: Number, required: true },
  amount: { type: Number, required: true },
  hotel: { type: mongoose.SchemaTypes.ObjectId, ref: "Hotel" },
  price: { type: Number, required: true },
  img: {type: String}
});

const Tur = mongoose.model("Tur", turSchema);

module.exports = Tur;
