const express = require('express');
const { getProfile, updateProfile } = require('../controllers/profileController'); // Import controller functions
const auth = require('../middleware/auth'); // Import authentication middleware
const router = express.Router(); // Create a new router

// Define routes for getting and updating user profile
router.get('/', auth, getProfile); // GET request to fetch user profile
router.put('/', auth, updateProfile); // PUT request to update user profile

module.exports = router; // Export the router
