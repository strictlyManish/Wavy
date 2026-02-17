const express = require("express");
const authMiddlleware = require("../middlewares/auth.middleware");
const UploadAudioController = require("../controller/audio.controller");
const routes = express.Router();

routes.post("/", authMiddlleware, UploadAudioController);

module.exports = routes;
