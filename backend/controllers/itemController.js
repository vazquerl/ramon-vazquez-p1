const Item = require('../models/Item'); // Import Item model

// Create item handler
exports.createItem = async (req, res) => {
    const { title, description, price } = req.body; // Destructure the request body

    try {
        const newItem = new Item({ title, description, price, user: req.user.id }); // Create new item
        await newItem.save(); // Save item to the database
        res.json(newItem); // Return the created item
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // Handle server errors
    }
};

// Get all items handler
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find(); // Fetch all items from the database
        res.json(items); // Return the items
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // Handle server errors
    }
};

// Get item by ID handler
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id); // Find item by ID
        if (!item) return res.status(404).json({ msg: 'Item not found' });
        res.json(item); // Return the item
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // Handle server errors
    }
};

// Update item handler
exports.updateItem = async (req, res) => {
    const { title, description, price } = req.body; // Destructure the request body

    try {
        const item = await Item.findById(req.params.id); // Find item by ID
        if (!item) return res.status(404).json({ msg: 'Item not found' });

        // Update item fields
        item.title = title;
        item.description = description;
        item.price = price;

        await item.save(); // Save the updated item
        res.json(item); // Return the updated item
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // Handle server errors
    }
};

// Delete item handler
exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id); // Find item by ID
        if (!item) return res.status(404).json({ msg: 'Item not found' });

        await item.remove(); // Remove the item from the database
        res.json({ msg: 'Item removed' }); // Confirmation message
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error'); // Handle server errors
    }
};
