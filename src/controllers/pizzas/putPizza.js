const Pizza = require("../../models/pizza");
const { response } = require("../../utils");

module.exports = async (req, res) => {
  const id = req.params.id;
  const updatedPizza = await Pizza.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      recet: req.body.recet,
      size: req.body.size,
      price: req.body.price,
      img: req.body.img,
    },
    { new: true }
  );

  response(res, 201, "Pizza editada correctamente");
};
