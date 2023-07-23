const { Router } = require("express");
const controllers = require("../controllers/pizzas");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getPizzas);
router.get("/:id", controllers.getPizzaById);
router.post("/", middlewares.pizzaValidations, controllers.postPizza);
router.put("/:id", middlewares.pizzaValidations, controllers.putPizza);
router.delete("/:id", controllers.deletePizza);

module.exports = router;
