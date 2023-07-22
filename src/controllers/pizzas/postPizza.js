const express = require("express");
const router = express.Router();
const Pizza = require("../../models/pizza");

router.post("/", async (req, res) => {
  const pizza = new Pizza({
    name: req.body.name,
    recet: req.body.recet,
    sice: req.body.recet,
    price: req.body.recet,
    img: req.body.img,
  });

  try {
    const newPizza = await pizza.save();
    res.status(201).json(newPizza);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
