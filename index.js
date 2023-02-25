const express = require('express');
require('dotenv').config()
const publicRoute = require('./routes/publicRouter');
const userRoute = require("./routes/userRoute");
const notFound = require("./routes/notFound");
const connectMongoDB = require('./database/connectMongo').connectMongoDB
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())

// public Route
app.use('/', publicRoute)

// user Route 
app.use("/user", userRoute);
// app.post('/user', async(req,res) =>{
//     const user = req.body;
//     console.log(user);
//     res.send(user);
// })

// notFound Route
app.use("*", notFound);
// mongoDB connection

// const connectMongoDB = async () =>{
//    try{
    

//    }catch(err){

//    }
// }

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
    connectMongoDB()
})