const express = require('express'); // Import express
const connectDB = require('./config/db'); // Import database connection function
const authRoutes = require('./routes/auth'); // Import auth routes
const profileRoutes = require('./routes/profile'); // Import profile routes
const itemRoutes = require('./routes/items'); // Import item routes
const feedbackRoutes = require('./routes/feedback'); // Import feedback routes
const app = express(); // Create an express application

connectDB(); // Connect to the database

app.use(express.json()); // Middleware to parse JSON requests
app.use('/api/auth', authRoutes); // Use auth routes
app.use('/api/profile', profileRoutes); // Use profile routes
app.use('/api/items', itemRoutes); // Use item routes
app.use('/api/feedback', feedbackRoutes); // Use feedback routes

const PORT = process.env.PORT || 5000; // Set port for the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server
