const express = require("express");
const { RegisterController, LoginController } = require("../controller/auth.controller");
const { authLimiter } = require("../middlewares/authLimiter");
const routes = express.Router();




routes.post("/register", authLimiter, RegisterController)
routes.post("/login",LoginController)









module.exports = routes;