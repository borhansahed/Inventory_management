const express = require('express');
const userRoute = express.Router();

const user = false;

const userMiddleWare = (req, res, next) =>{
    if(user){
      return  next();
    }
   return res.send("You have to login")
}
userRoute.use(userMiddleWare)

userRoute.get('/', (req,res) =>{
    res.send("Login");
})



module.exports = userRoute;