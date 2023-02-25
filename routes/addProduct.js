const express = require('express');
const { ObjectId } = require('mongodb');
const addProduct = express.Router();
const {productCollection} = require('../database/collections');
const productMiddleware = require('../middleware/productMiddleware');


addProduct.use(productMiddleware)
addProduct.post('/', async (req , res) => {
    
    const product = req.body;
    const result = await productCollection.insertOne(product);
    res.send(result);
})
addProduct.delete('/:id', async (req , res) => {
    
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await productCollection.deleteOne(query);
    res.send(result);
})

module.exports = addProduct;