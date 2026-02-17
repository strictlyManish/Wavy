require("dotenv").config();
const express = require("express");
const connectToDB = require("./src/db/db");
const app = express();
const authRoutes = require("./src/routes/authRoutes");
const audioRoutes = require("./src/routes/audioRoutes");
const cookier_parser = require("cookie-parser");




//Middlewares
app.use(cookier_parser());
app.use(express.json());



//Routes
app.use("/auth", authRoutes);
app.use("/upload", audioRoutes);

//Server

connectToDB();
app.listen(process.env.PORT, function () {
  console.log(`Server runnig on port ${process.env.PORT}`);
});


