const client = require('./connectMongo').client;
const userCollection = client.db('inventory_management').collection('user');
const productCollection = client.db('inventory_management').collection('product');
const orderCollection = client.db('inventory_management').collection('order');

module.exports = {userCollection , productCollection, orderCollection};