const express = require('express');
const orderRoute = express.Router();

orderRoute.get('/', (req,res) =>{
    res.send("All orders are below");
})


module.exports = orderRoute;