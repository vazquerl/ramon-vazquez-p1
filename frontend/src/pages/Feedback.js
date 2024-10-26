import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect
import axios from 'axios'; // Import axios for API requests

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]); // State to hold feedbacks

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('/api/feedback'); // Fetch feedback from the backend
                setFeedbacks(response.data); // Update state with fetched feedback
            } catch (error) {
                console.error('Error fetching feedback:', error); // Handle errors
            }
        };

        fetchFeedbacks(); // Call the fetch function
    }, []); // Empty dependency array to run only once

    return (
        <div>
            <h2>Feedback</h2>
            <ul>
                {/* Map over feedbacks and render them */}
                {feedbacks.map((feedback) => (
                    <li key={feedback._id}>{feedback.text}</li> // Use feedback._id as the key
                ))}
            </ul>
        </div>
    );
};

export default Feedback; // Export Feedback component
