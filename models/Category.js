const { model, Schema } = require("mongoose");

const categorySchema = new Schema({
  name: String,
  description: String,
  createdAt: String,
  tags: Array
});

module.exports = model("Category", categorySchema);