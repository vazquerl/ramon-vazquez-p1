const Feedback = require('../models/Feedback'); // Import Feedback model

// Submit feedback handler
exports.submitFeedback = async (req, res) => {
    const { text } = req.body; // Destructure the request body

    try {
        const feedback = new Feedback({ user: req.user.id, text }); // Create new feedback
        await feedback.save(); // Save feedback to the database
        res.json(feedback); // Return the created feedback
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // Handle server errors
    }
};

// Get all feedback handler
exports.getFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().populate('user', 'username'); // Fetch feedbacks and populate user information
        res.json(feedbacks); // Return the feedbacks
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // Handle server errors
    }
};
