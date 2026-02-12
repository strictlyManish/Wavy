require("dotenv").config();
const express = require("express");
const connectToDB = require("./src/db/db");


const app = express();




connectToDB();
app.listen(process.env.PORT,function(){
    console.log(`Server runnig on port ${process.env.PORT}`)
});

