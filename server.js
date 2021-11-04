const express = require("express");
const path = require("path");
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
    coverImage: String,
    price: Number,
    discount: Number,
    size: String,
    weight: Number,
    prepareTime: Number,
  })
);

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.insertMany(data.products);
    res.send(products);
  } catch (err) {
    next(err);
  }
});

app.use(express.static(path.join(__dirname, "/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
