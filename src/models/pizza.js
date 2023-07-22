const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  name: String,
  recet: String,
  size: String,
  price: String,
  img: String,
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
