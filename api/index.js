const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// import routes
const customers = require("./customers");
const products = require("./products");
const orders = require("./orders");

// use routes
app.use("/customers", customers);
app.use("/products", products);
app.use("/orders", orders);

module.exports = app;
