const { catchedAsync } = require("../../utils");

module.exports = {
  getPizzas: catchedAsync(require("./getPizzas")),
  getPizzaById: catchedAsync(require("./getPizzaById")),
  postPizza: catchedAsync(require("./postPizza")),
  putPizza: catchedAsync(require("./putPizza")),
  deletePizza: catchedAsync(require("./deletePizza")),
};
