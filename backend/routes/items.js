const express = require('express');
const { createItem, getAllItems, getItemById, updateItem, deleteItem } = require('../controllers/itemController'); // Import controller functions
const auth = require('../middleware/auth'); // Import authentication middleware
const router = express.Router(); // Create a new router

// Define routes for item management
router.post('/', auth, createItem); // POST request to create a new item
router.get('/', getAllItems); // GET request to fetch all items
router.get('/:id', getItemById); // GET request to fetch an item by ID
router.put('/:id', auth, updateItem); // PUT request to update an item
router.delete('/:id', auth, deleteItem); // DELETE request to remove an item

module.exports = router; // Export the router
