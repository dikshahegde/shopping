const mongoose = require("mongoose");

const ShoppingListSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  listName: { type: String, required: true },
  items: { type: Array, default: [] },
});

module.exports = mongoose.model("ShoppingList", ShoppingListSchema);
