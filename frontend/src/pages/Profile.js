import React, { useEffect } from 'react'; // Import React and useEffect

const Profile = () => {
    useEffect(() => {
        // Logic to fetch user profile will go here
    }, []);

    return (
        <div>
            <h2>Your Profile</h2>
            {/* User profile details will go here */}
        </div>
    );
};

export default Profile; // Export Profile component
