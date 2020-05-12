const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Listing Schema
const listingSchema = new Schema({
  address: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  beds: { type: Number, required: false },
  baths: { type: Number, required: false },
  pets: { type: String, required: false },
  sqft: { type: Number, required: false },
  provider: { type: String, required: true },
  URL: { type: String, required: true },
  available: { type: String, required: true }
});

// const Listing = mongoose.model("listings", listingSchema);

module.exports = listingSchema;