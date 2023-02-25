const express = require("express");
const { productCollection } = require("../database/collections");
const orderRouter = require('./order');
const publicRoute = express.Router();


publicRoute.get("/", (req,res) =>{
    res.send("Welcome to Inventory Management");
})
// Order Route
publicRoute.use('/order', orderRouter)

// product
publicRoute.get('/product', async (req, res) => {
    const result = await productCollection.find({}).toArray();
    res.send(result);
 })


module.exports = publicRoute;