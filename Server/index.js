const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/newuser')
.then(()=>{
    console.log("db connected")
})
.catch((e)=>{
    console.log("db not connected");
})

const app = express();

app.use("/", require("./Routes/authRoutes"))

const port= 8000;
app.listen(port,()=>{
    console.log(`connection established on ${port}`);
})

