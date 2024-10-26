import React, { useState } from 'react'; // Import React and useState

const Login = () => {
    const [email, setEmail] = useState(''); // Email state
    const [password, setPassword] = useState(''); // Password state

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Logic to handle login will go here
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button> {/* Login button */}
        </form>
    );
};

export default Login; // Export Login component
