const mongoose = require('mongoose'); // Import mongoose

// Define the Feedback schema
const FeedbackSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User model
    text: { type: String, required: true }, // Feedback text
});

// Export the Feedback model
module.exports = mongoose.model('Feedback', FeedbackSchema);
