const express = require("express");
const server = require("./src/server");

const PORT = process.env.PORT || 3010;

server.listen(PORT, () => {
  console.log(`Pizzas service listening on PORT ${PORT}`);
});
