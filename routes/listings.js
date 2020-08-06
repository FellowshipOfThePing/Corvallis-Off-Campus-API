// Require express router and model
const router = require("express").Router();
const connections = global.connections;

// Routes

// Get Raw_listings
router.get("/:school/by_unit", (req, res) => {
  let Raw_Listing = connections[req.params.school]["raw_model"];
  Raw_Listing.find()
    .then((listings) => res.json(listings))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get Formatted_listings
router.get("/:school/by_type", (req, res) => {
  let Formatted_Listing = connections[req.params.school]["formatted_model"];
  Formatted_Listing.find()
    .then((listings) => res.json(listings))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get Address_listings
router.get("/:school/by_address", (req, res) => {
  let Addressed_Listing = connections[req.params.school]["address_model"];
  let req_price_high = req.query.price_high ? req.query.price_high : 10000;
  let req_price_low = req.query.price_low ? req.query.price_low : 0;
  let req_beds_high = req.query.beds_high ? req.query.beds_high : 5;
  let req_beds_low = req.query.beds_low ? req.query.beds_low : 1;
  let req_baths_high = req.query.baths_high ? req.query.baths_high : 5;
  let req_baths_low = req.query.baths_low ? req.query.baths_low : 1;
  let req_distance_high = req.query.distance_high ? req.query.distance_high : 50;
  let req_distance_low = req.query.distance_low ? req.query.distance_low : 0;
  let req_drive_high = req.query.drive_high ? req.query.drive_high : 50;
  let req_drive_low = req.query.drive_low ? req.query.drive_low : 0;
  let req_walk_high = req.query.walk_high ? req.query.walk_high : 100;
  let req_walk_low = req.query.walk_low ? req.query.walk_low : 0;
  Addressed_Listing.find(
    {
      price_high: { $gte: req_price_low, $lte: req_price_high },
      beds: { $gte: req_beds_low, $lte: req_beds_high },
      baths: { $gte: req_baths_low, $lte: req_baths_high },
      drive_to_campus_miles: {
        $gte: req_distance_low,
        $lte: req_distance_high,
      },
      drive_to_campus_minutes: { $gte: req_drive_low, $lte: req_drive_high },
      walk_to_campus_minutes: { $gte: req_walk_low, $lte: req_walk_high },
    },
    function (err, listings) {
      res.json({ length: listings.length, listings: listings });
    }
  );
});

// Export router
module.exports = router;
