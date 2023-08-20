const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiesTopology: true,
    useCreateIndex:true,

});

dotenv.config(); 

app.listen(5000,()=>{
    console.log("backend is running");
})