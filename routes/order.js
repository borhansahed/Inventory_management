const express = require("express");
const { ObjectId } = require("mongodb");
const orderRoute = express.Router();
const {
  orderCollection,
  productCollection,
} = require("../database/collections");
const orderMiddleware = require("../middleware/orderMiddleware");

orderRoute.get("/", async (req, res) => {
  const result = await orderCollection.find({}).toArray();
  res.send(result);
});

// get user individual order
orderRoute.get("/:email", async (req, res) => {
  const email = req.params.email;
  const result = await orderCollection.find({ email: email }).toArray();
  res.send(result);
});

orderRoute.use(orderMiddleware);
orderRoute.post("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.body)
  const query = {_id: new ObjectId(id)};
  const product = await productCollection.findOne(query)
//   const product = req.body;

  const result = await orderCollection.insertOne(product);

  res.send("order successfully");
});

orderRoute.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await orderCollection.deleteOne(query);
  res.send(result);
});

module.exports = orderRoute;
