const Pizza = require("../../models/pizza");
const { response } = require("../../utils");

module.exports = async (req, res) => {
  const id = req.params.id;
  const deletedPizza = await Pizza.findByIdAndDelete(id);
  if (!deletedPizza) {
    return res.status(404).json({ message: "Pizza no encontrado" });
  }
  response(res, 201, "Pizza Eliminada correctamente");
};
