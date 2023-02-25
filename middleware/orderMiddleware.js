const orderCollection = require("../database/collections").orderCollection;
// const productCollection = require("../database/collections").productCollection;

const orderMiddleware = async (req, res, next) => {
  const productName = req.body.name;
  const isExist = await orderCollection.findOne({ name: productName });
 
  if (isExist) {
    const updateDoc = {
      $set: {
         
         quantity: parseInt(isExist.quantity)+1,
      },
    };
    const updateQuantity = await orderCollection.updateOne(
      { name: productName },
      updateDoc
   
    );
    res.send("Order successfully done")
  } else {
   req.body.quantity = 1;
   
    next();
  }
};

module.exports = orderMiddleware;
