import React, { useState } from 'react'; // Import React and useState

const Register = () => {
    const [username, setUsername] = useState(''); // Username state
    const [email, setEmail] = useState(''); // Email state
    const [password, setPassword] = useState(''); // Password state

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Logic to handle registration will go here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button> {/* Register button */}
        </form>
    );
};

export default Register; // Export Register component
