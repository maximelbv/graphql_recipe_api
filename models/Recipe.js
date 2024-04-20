const { model, Schema } = require("mongoose");

const recipeSchema = new Schema({
  name: String,
  description: String,
  createdAt: Number,
  thumbsUp: Number,
  thumbsDown: Number,
});

module.exports = model("Recipe", recipeSchema);
