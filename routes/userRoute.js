const express = require('express');
const userRoute = express.Router();
const userCollection = require('../database/collections')



userRoute.get('/', async (req, res) =>{
  const result = await userCollection.find({}).toArray();
  res.send(result);
})


userRoute.post('/login', async (req,res) =>{
  const {email, password, name} = req.body;
   
  const userEmail = await userCollection.findOne({email:email})
  const userPassword = await userCollection.findOne({password:password});
    if(!userEmail){
     return  res.status(404).json("User Email not Found");
    }
    if(!userPassword ){
      return  res.status(404).json(" Password  not Matched");
    }

    res.redirect('/');

})
userRoute.post('/signin', async (req,res) =>{
  const {email, password} = req.body;
   
  const userEmail = await userCollection.findOne({email:email})
  const userPassword = await userCollection.findOne({password:password});
    if(userEmail && userPassword){
     return  res.status(200).json("Already sign in");
    }
   
     await userCollection.insertOne(req.body);
     res.json({message:"Successfully sign in"})
})


module.exports = userRoute;