const Pizza = require("../../models/pizza");
const { response } = require("../../utils");

module.exports = async (req, res) => {
  const id = req.params.id;
  const pizza = await Pizza.findById(id);
  if (!pizza) {
    return res.status(404).json({ message: "Pizza no encontrado" });
  }
  response(res, 200, pizza);
};
