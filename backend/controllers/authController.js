const User = require('../models/User'); // Import User model
const bcrypt = require('bcryptjs'); // Import bcrypt for hashing
const jwt = require('jsonwebtoken'); // Import JWT
const config = require('config'); // Import config

// User registration handler
exports.register = async (req, res) => {
    const { username, email, password } = req.body; // Destructure the request body

    try {
        let user = await User.findOne({ email }); // Check if user already exists
        if (user) return res.status(400).json({ msg: 'User already exists' });

        user = new User({ username, email, password }); // Create a new user

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save(); // Save user to the database

        const payload = { user: { id: user.id } }; // Create JWT payload
        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '1h' }, (err, token) => {
            if (err) throw err; // Handle JWT signing errors
            res.json({ token }); // Return the token
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // Handle server errors
    }
};

// User login handler
exports.login = async (req, res) => {
    const { email, password } = req.body; // Destructure the request body

    try {
        const user = await User.findOne({ email }); // Find user by email
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { user: { id: user.id } }; // Create JWT payload
        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '1h' }, (err, token) => {
            if (err) throw err; // Handle JWT signing errors
            res.json({ token }); // Return the token
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // Handle server errors
    }
};
