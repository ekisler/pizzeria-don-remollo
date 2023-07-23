const Pizza = require("../../models/pizza");
const { response } = require("../../utils");

module.exports = async (req, res) => {
  const pizzas = await Pizza.find();
  response(res, 200, pizzas);
};
