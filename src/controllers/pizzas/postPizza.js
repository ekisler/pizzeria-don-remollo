const Pizza = require("../../models/pizza");
const { response } = require("../../utils");

module.exports = async (req, res) => {
  const newPizza = await Pizza.create({
    name: req.body.name,
    recet: req.body.recet,
    size: req.body.size,
    price: req.body.price,
    img: req.body.img,
  });
  response(res, 201, "Pizza creada correctamente");
};
 