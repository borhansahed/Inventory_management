const express = require('express');
const { ObjectId } = require('mongodb');
const adminRoute = express.Router();
const { userCollection, orderCollection} = require('../database/collections');
const adminMiddleWare = require('../middleware/adminMiddleware');

adminRoute.get('/user/:email',adminMiddleWare, async (req , res) => {
    
    const UserList = await userCollection.find({}).toArray();
    res.send(UserList);
})
adminRoute.get('/order/:email',adminMiddleWare, async (req , res) => {
    
    const result = await orderCollection.find({}).toArray();
    res.send(result);
})

adminRoute.delete('/user/:id', async (req,res) => {
    const id = req.params.id;
    const result = await userCollection.deleteOne({_id: new ObjectId(id)});
    res.send(result);
})
adminRoute.delete('/order/:id', async (req,res) => {
    const id = req.params.id;
    const result = await orderCollection.deleteOne({_id: new ObjectId(id)});
    res.send(result);
})

module.exports = adminRoute;