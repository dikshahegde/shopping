const express = require("express");
const ShoppingList = require("../models/ShoppingList");
const router = express.Router();

// Create List
router.post("/", async (req, res) => {
  const { userId, listName, items } = req.body;
  try {
    const totalSpent = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const newList = new ShoppingList({ userId, listName, items, totalSpent });
    await newList.save();
    res.status(201).json(newList);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Lists
router.get("/:userId", async (req, res) => {
  try {
    const lists = await ShoppingList.find({ userId: req.params.userId });
    res.json(lists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
