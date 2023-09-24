const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

app.use("/", require("./Routes/authRoutes"))

const port= 8000;
app.listen(port,()=>{
    console.log(`connection established on ${port}`);
})

