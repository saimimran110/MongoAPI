const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('./db');
const mongodbRoutes = require('./routes/mongodbRoutes');
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/mongodb', mongodbRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});