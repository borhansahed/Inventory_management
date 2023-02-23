const express = require("express");
const orderRouter = require('./order');
const publicRoute = express.Router();


publicRoute.get("/", (req,res) =>{
    res.send("Welcome to Inventory Management");
})
// Order Route
publicRoute.use('/order', orderRouter)


module.exports = publicRoute;