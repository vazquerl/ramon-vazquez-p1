import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
    return (
        <nav>
            {/* Navigation links */}
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/items">Items</Link>
            <Link to="/feedback">Feedback</Link>
        </nav>
    );
};

export default Navbar; // Export Navbar component
