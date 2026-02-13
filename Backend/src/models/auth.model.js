const mongoose = require("mongoose");

const users_Model = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  { timestamps: true },
);


const userModel = mongoose.model("user",users_Model);
module.exports = userModel;