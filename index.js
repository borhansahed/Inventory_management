const express = require("express");
require("dotenv").config();
const publicRoute = require("./routes/publicRouter");
const addProduct = require("./routes/addProduct");
const userRoute = require("./routes/userRoute");
const notFound = require("./routes/notFound");
const orderRoute = require("./routes/order");
const { client } = require("./database/connectMongo");
const adminRoute = require("./routes/admin");
const connectMongoDB = require("./database/connectMongo").connectMongoDB;
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

async function run() {
  try {
    // admin Route
    app.use("/admin", adminRoute);
    // public Route
    app.use("/", publicRoute);

    // product route
    app.use("/addproduct", addProduct);
    // user Route
    app.use("/user", userRoute);

    app.use("/order", orderRoute);

    // notFound Route
    app.use("*", notFound);
  } finally {
    client.close();
  }
}
run().catch(console.dir);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectMongoDB();
});
