// Import mongoose
const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true }, // Username of the user
    email: { type: String, required: true, unique: true }, // User's email, must be unique
    password: { type: String, required: true }, // User's hashed password
    role: { type: String, default: 'user' }, // User role, default is 'user'
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);
