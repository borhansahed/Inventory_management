const { ObjectId } = require("mongodb");
const { productCollection,orderCollection, userCollection  } = require("../database/collections");


const orderMiddleware = async (req, res, next) => {
  try{
    
    const id = req.params.id;
    const {email} = req.body;
    const query = {_id: new ObjectId(id)};
    const product = await productCollection.findOne(query)
    const isExist = await orderCollection.findOne({ name: product.name, email:email});
 console.log(isExist)

    if (isExist) {
      const updateDoc = {
        $set: {
           
           quantity: parseInt(isExist.quantity)+1,
        },
      };
      const updateQuantity = await orderCollection.updateOne(
        { name: product.name, email:email },
        updateDoc,
       {upsert:true}
      );
      console.log(isExist)
      return res.send("Order Successfully")
    } else {

      const userEmail = await userCollection.findOne({email:email});
      if(!userEmail){
        return res.send("You have to sign in first")
      }

      const updateProduct = {
        ...product,
        email : email,
        quantity:1,
        
     }
     delete updateProduct._id;
     req.body = updateProduct;
      next();
    }
  }catch(err){
    console.log(err)
    res.send("There was an Error");
  }
  
};

module.exports = orderMiddleware;
