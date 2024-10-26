// src/index.js
const express = require('express');
const config = require('./config');

const app = express();
const PORT = config.port;

// Middleware
app.use(express.json());

// Simple route
app.get('/api', (req, res) => {
    res.send('Hello from the back end!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
