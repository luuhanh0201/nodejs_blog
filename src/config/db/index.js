const mongoose = require('mongoose')
// const MongoClient = require('mongodb').MongoClient;
const userName = "luuhanh0201"
const password = "Hanh04042001"
// const dbName = "nodejs-blog"
const connectString = `mongodb+srv://${userName}:${password}@cluster0.gfw8qvn.mongodb.net/test`;
// mongodb+srv://luuhanh0201:<password>@cluster0.gfw8qvn.mongodb.net/test
async function connect() {
  try {
    await mongoose.connect(connectString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("CONNECT OK")
  } catch (error) {
    console.log("ERROR CONNECT: ")
    
  }

}

module.exports = {connect}