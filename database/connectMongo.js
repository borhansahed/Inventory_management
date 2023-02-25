const {MongoClient,ServerApiVersion } = require('mongodb');
const url =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tyfuffq.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function connectMongoDB(){

    try{
      
    
         await client.connect()
        console.log("Connected successfully")
        
        

     }catch(err){
        console.log(err.message);
     }
   
    
}

module.exports ={ connectMongoDB, client};
