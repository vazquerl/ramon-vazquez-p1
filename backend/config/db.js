// Import the necessary modules
const mongoose = require('mongoose');
const config = require('config');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connect to MongoDB using the URI from the config
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        // Exit the process if connection fails
        process.exit(1);
    }
};

module.exports = connectDB; // Export the connectDB function
