const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db.js");

const pizzasRouter = require("./routes/pizzas.js");

const server = express();

server.use(cors("*"));
server.use(express.json());

connectDB();

server.use("/pizzas", pizzasRouter);

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});

server.use((err, req, res, next) => {
  res.status(err.statsCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
