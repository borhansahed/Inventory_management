const { userCollection } = require("../database/collections");

const adminMiddleWare = async (req,res,next) =>{
    const email = req.params.email;
    const isAdmin = await userCollection.findOne({email:email, isAdmin:true});
     console.log(isAdmin)
    if(isAdmin){
        next();
    }else{
        return res.send("You are not a Admin")
    }

}

module.exports = adminMiddleWare;