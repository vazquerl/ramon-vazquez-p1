const mongoose = require('mongoose');

// Define the Profile schema
const ProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User model
    bio: { type: String }, // Bio of the user
    profilePicture: { type: String }, // URL for the profile picture
});

// Export the Profile model
module.exports = mongoose.model('Profile', ProfileSchema);
