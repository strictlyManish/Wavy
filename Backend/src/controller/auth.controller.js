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

    return res.status(200).json({
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

    if(!email && !password){
      return res.status(406).json({
        message:"input fields are required"
      })
    };


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

    return res.status(200).json({
      message: "Logged In",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

LoggedoutContreoller = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "Strict",
    });

    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "Strict",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};

RetriveUserController = async (req, res) => {
  try {
    const user = req.user;

    const data = await userModel.findById(user.id);

    if (!user) {
      return res.status.json({
        message: "invalide user or incorrect id",
      });
    }

    return res.status(200).json({
      message: "User details fetched sucessfully",
      data: {
        name: data.name,
        email: data.email,
      },
    });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  RegisterController,
  LoginController,
  LoggedoutContreoller,
  RetriveUserController,
};