const Profile = require('../models/Profile'); // Import Profile model

// Get user profile handler
exports.getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }); // Find profile by user ID
        if (!profile) return res.status(404).json({ msg: 'Profile not found' });
        res.json(profile); // Return the profile
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // Handle server errors
    }
};

// Update user profile handler
exports.updateProfile = async (req, res) => {
    const { bio, profilePicture } = req.body; // Destructure the request body

    try {
        let profile = await Profile.findOne({ user: req.user.id }); // Find profile by user ID
        if (!profile) {
            profile = new Profile({ user: req.user.id, bio, profilePicture }); // Create new profile if it doesn't exist
        } else {
            profile.bio = bio; // Update existing profile fields
            profile.profilePicture = profilePicture;
        }

        await profile.save(); // Save profile to the database
        res.json(profile); // Return the updated profile
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // Handle server errors
    }
};
