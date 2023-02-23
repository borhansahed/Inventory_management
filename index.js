const express = require('express');
const publicRoute = require('./routes/publicRouter');
const userRoute = require("./routes/userRoute");
const notFound = require("./routes/notFound");
const app = express();
const PORT = process.env.PORT || 5000;


// public Route
app.use('/', publicRoute)

// user Route 
app.use("/user", userRoute);

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
    // connectMongoDB();
})