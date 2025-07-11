// backend/routes/todos.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// CREATE
router.post('/', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const saved = await todo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL (optional: filter by status)
router.get('/', async (req, res) => {
  const filter = req.query.status ? { status: req.query.status } : {};
  const todos = await Todo.find(filter).sort({ dueDate: 1 });
  res.json(todos);
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
