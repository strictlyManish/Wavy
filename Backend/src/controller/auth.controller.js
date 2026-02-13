const bcrypt = require("bcryptjs");
const userModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");
const validator = require("validator");

RegisterController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }
    const userCheck = await userModel.findOne({ email });

    if (userCheck) {
      return res.status(409).json({
        message: "User allredy exist with this email id",
      });
    }

    const hash_password = await bcrypt.hash(password, 10);
    const createUser = await userModel.create({
      name,
      email,
      password: hash_password,
    });

    const token = jwt.sign({ id: createUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
      issuer: "Wavy",
    });

    res.cookie("token", token);

    res.status(200).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }
    const userCheck = await userModel.findOne({ email });

    if (!userCheck) {
      return res.status(409).json({
        message: "This email id is not registred",
      });
    }

    const passCheck = await bcrypt.compare(password, userCheck.password);

    if (!passCheck) {
      return res.status(409).json({
        message: "incorrect information",
      });
    }

    const token = jwt.sign({ id: userCheck._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
      issuer: "Wavy",
    });

    res.cookie("token", token);

    res.status(200).json({
      message: "Logged In",
    });

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { RegisterController, LoginController };
