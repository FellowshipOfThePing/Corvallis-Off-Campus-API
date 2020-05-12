// DESCRIPTION: Basic Routing file
const mongoose = require("mongoose");

// List of schools
const schools = ["OSU"];

// Connections object to export
var connections = {}

// Connect to collection function
function connect_collection(collection) {

  // Create connection
  const conn = mongoose.createConnection(
    process.env.mongo_key + collection,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }
  );

  // On Open Event
  conn.on("open", () => {
    console.log(`${collection} database connection established successfully`);
  });

  // On Error
  conn.on("error", err => {
    console.log(`Error connecting to ${collection} Database`, err);
  });

  // Add to connections object (with DB models)
  connections[collection] = {
    'connection': conn,
    'raw_model': conn.model("raw_listings", require('./models/raw_listing.model')),
    'formatted_model': conn.model("formatted_listings", require('./models/formatted_listing.model')),
    'address_model': conn.model("address_listings", require('./models/addressed_listing.model'))
  }
}

// Append connections to object
for (var i = 0; i < schools.length; i++) {
  try {
    connect_collection(schools[i])
  } catch (err) {
    console.log(`Connection Error: ${schools[i]} Database`)
  }
}

// Set connections to global variable
global.connections = connections;
