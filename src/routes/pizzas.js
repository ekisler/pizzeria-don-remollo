const express = require("express");
const router = express.Router();
const getPizzaRouter = require("../controllers/pizzas/getPizza");
const getPizzaById = require("../controllers/pizzas/getPizzaById");
const postPizza = require("../controllers/pizzas/postPizza");
const putPizza = require("../controllers/pizzas/putPizza");
const deletePizza = require("../controllers/pizzas/deletePizza");

router.use("/", getPizzaRouter);
router.get("/:id", getPizzaById);
router.post("/", postPizza);
router.put("/:id", putPizza);
router.delete("/:id", deletePizza);

module.exports = router;
