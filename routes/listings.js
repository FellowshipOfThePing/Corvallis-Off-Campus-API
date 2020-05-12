// Require express router and model
const router = require('express').Router();
const connections = global.connections;

// Routes

// Get Raw_listings
router.get('/:school/by_unit', (req, res) => {
    let Raw_Listing = connections[req.params.school]['raw_model'];
    Raw_Listing.find()
        .then(listings => res.json(listings))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Formatted_listings
router.get('/:school/by_type', (req, res) => {
    let Formatted_Listing = connections[req.params.school]['formatted_model'];
    Formatted_Listing.find()
        .then(listings => res.json(listings))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Address_listings
router.get('/:school/by_address', (req, res) => {
    let Addressed_Listing = connections[req.params.school]['address_model'];
    Addressed_Listing.find()
        .then(listings => res.json(listings))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Export router
module.exports = router