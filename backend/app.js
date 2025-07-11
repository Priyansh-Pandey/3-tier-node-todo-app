const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Middlewares
app.use(bodyParser.json());

// API Routes
const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

// Serve frontend static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for frontend routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Listen on 0.0.0.0 to allow external access
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://0.0.0.0:${port}`);
});
