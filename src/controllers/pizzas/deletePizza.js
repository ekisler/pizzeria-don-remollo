const express = require("express");
const router = express.Router();
const Pizza = require("../../models/pizza");

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedPizza = await Pizza.findByIdAndDelete(id);
    if (!deletedPizza) {
      return res.status(404).json({ message: "Pizza no encontrado" });
    }
    res.json({ message: "Pizza eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
