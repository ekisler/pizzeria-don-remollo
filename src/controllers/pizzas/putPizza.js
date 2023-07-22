const express = require("express");
const router = express.Router();
const Pizza = require("../../models/pizza");

router.put("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        recet: req.body.recet,
        sice: req.body.recet,
        price: req.body.recet,
        img: req.body.img,
      },
      { new: true }
    );

    if (!updatedPizza) {
      return res.status(404).json({ message: "Pizza no encontrado" });
    }

    res.json(updatedPizza);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
