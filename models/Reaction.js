const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

const reactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = reactionSchema;
