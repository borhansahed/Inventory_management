const client = require('./connectMongo').client;
const userCollection = client.db('inventory_management').collection('user');

module.exports = userCollection;