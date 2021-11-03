const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const data = require("./data");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGODB_URI);

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    image: String,
    price: Number,
    discount: Number,
    size: String,
    weight: Number,
    prepareTime: Number,
  })
);

app.get("/api/products", async (req, res) => {
  const products = await Product.insertMany(data.products);
  res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
