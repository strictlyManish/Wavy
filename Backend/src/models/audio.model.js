const mongoose = require("mongoose");

const audioScema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    audio: {
      url: { type: String, required: true },
    },

    genre: {
      type: String,
      enum: ["HipHop", "LoFi", "EDM", "Pop", "Rock", "Other"],
      default: "Other",
    },
  },
  { timestamps: true },
);

const audioModel = mongoose.model("audio", audioScema);
module.exports = audioModel;
