const express = require("express");
const { RegisterController, LoginController, LoggedoutContreoller, RetriveUserController } = require("../controller/auth.controller");
const { authLimiter } = require("../middlewares/authLimiter");
const authMiddlleware = require("../middlewares/auth.middleware");
const routes = express.Router();




routes.post("/register", authLimiter, RegisterController);
routes.post("/login",LoginController);
routes.get("/logout",LoggedoutContreoller);
routes.get("/get", authMiddlleware, RetriveUserController);









module.exports = routes;