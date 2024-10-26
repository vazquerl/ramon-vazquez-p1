const jwt = require('jsonwebtoken'); // Import JWT
const config = require('config'); // Import config

// Middleware function for authentication
module.exports = function (req, res, next) {
    const token = req.header('x-auth-token'); // Get token from request headers

    // Check if token exists
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        // Verify the token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user; // Attach user information to the request object
        next(); // Move to the next middleware or route handler
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' }); // Invalid token
    }
};
