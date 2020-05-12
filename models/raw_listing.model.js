const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Listing Schema
const rawListingSchema = new Schema({
  _id: { type: Object, required: false },
  address: { type: String, required: true },
  unitNum: { type: String, required: false },
  price_high: { type: Number, required: true },
  price_low: { type: Number, required: false },
  beds: { type: Number, required: false },
  baths: { type: Number, required: false },
  pets: { type: Boolean, required: false },
  sqft: { type: Number, required: false },
  provider: { type: String, required: true },
  images: { type: Array, required: false },
  URL: { type: String, required: true },
  available: { type: String, required: true },
  original_site: { type: String, required: false },
  duplicates: { type: Array, required: false },
  latitude: { type: Number, required: false },
  longitude: { type: Number, required: false },
  walk_to_campus_miles: { type: Number, required: false },
  walk_to_campus_minutes: { type: Number, required: false },
  drive_to_campus_miles: { type: Number, required: false },
  drive_to_campus_minutes: { type: Number, required: false }
});

// const Raw_Listing = mongoose.model("raw_listings", rawListingSchema);

module.exports = rawListingSchema;
