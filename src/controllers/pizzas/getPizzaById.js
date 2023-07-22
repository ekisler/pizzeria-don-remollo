const express = require("express");
const router = express.Router();
const Pizza = require("../../models/pizza");

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const pizza = await Pizza.findById(id);
    if (!pizza) {
      return res.status(404).json({ message: "Pizza no encontrado" });
    }
    res.json(pizza);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
