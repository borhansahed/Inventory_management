const express = require('express');
const notFound = express.Router();

notFound.get('/', (req,res) =>{
    res.send("Sorry Not Founded!")
})

module.exports = notFound;