const express = require('express');
const { register, login } = require('../controllers/authController'); // Import controller functions
const router = express.Router(); // Create a new router

// Define routes for registration and login
router.post('/register', register); // POST request to register a new user
router.post('/login', login); // POST request to log in

module.exports = router; // Export the router
