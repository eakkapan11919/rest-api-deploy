const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// import routes
const customers = require("./routes/customers");
const products = require("./routes/products");
const orders = require("./routes/orders");

// use routes
app.use("/customers", customers);
app.use("/products", products);
app.use("/orders", orders);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});