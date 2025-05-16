const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('./db');
const mongodbRoutes = require('./routes/mongodbRoutes');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware

app.use(cors({
  origin: 'http://localhost:5173', // allow frontend dev server
})); // Enable CORS for all origins
app.use(bodyParser.json());

// Routes
app.use('/api/mongodb', mongodbRoutes);

// Default route for testing
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

// MongoDB connection
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Export the app for Vercel
module.exports = app;