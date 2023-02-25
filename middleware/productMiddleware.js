
const productCollection = require("../database/collections").productCollection;

const productMiddleware = async (req, res, next) => {
  const productName = req.body.name;
  const isExist = await productCollection.findOne({ name: productName });
  
  if (isExist && isExist.name === productName) {
   
   res.send("Already added in store")
  } else{
    next();
  }

    
  
};

module.exports = productMiddleware;