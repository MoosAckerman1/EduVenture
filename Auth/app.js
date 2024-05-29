//API GATEWAY
var bodyParser = require('body-parser');
var cors = require('cors');

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config(); 





async function connectDB() {
    try {
      await mongoose.connect(process.env.mongoURI, {});
      console.log('MongoDB connected');
    } catch (err) {
      console.error('MongoDB connection error:', err);
    }
  }
    connectDB();


  //console.log(`MongoDB URI: ${process.env.mongouri}`);


// const httpProxy = require("http-proxy");

// const proxy = httpProxy.createProxyServer();
const app = express();


app.get('/auth',(req,res)=>{
 res.send("This is my auth service ")

})


app.post('/auth',(req,res)=>{
  res.send("This is my auth service ")
 
 })

 //create func



// Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`API Gateway listening on port ${port}`);
});