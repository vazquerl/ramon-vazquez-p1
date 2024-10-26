const express = require('express');
const { submitFeedback, getFeedback } = require('../controllers/feedbackController'); // Import controller functions
const router = express.Router(); // Create a new router

// Define routes for feedback management
router.post('/', submitFeedback); // POST request to submit feedback
router.get('/', getFeedback); // GET request to fetch all feedback

module.exports = router; // Export the router
