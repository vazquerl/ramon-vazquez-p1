import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState
import axios from 'axios'; // Import axios for API requests

const ItemList = () => {
    const [items, setItems] = useState([]); // State to hold items

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('/api/items'); // Fetch items from the backend
                setItems(response.data); // Update state with fetched items
            } catch (error) {
                console.error('Error fetching items:', error); // Handle errors
            }
        };

        fetchItems(); // Call the fetch function
    }, []); // Empty dependency array to run only once

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {/* Map over items and render them */}
                {items.map((item) => (
                    <li key={item._id}>{item.title}</li> // Use item._id as the key
                ))}
            </ul>
        </div>
    );
};

export default ItemList; // Export ItemList component
