// Require Modules
const express = require("express");
const cors = require("cors");
const helmet = require('helmet');

// Configures environment variables into .env file
require("dotenv").config();

// Create Express Server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

// Start Mongoose Connections
require('./connections');

// Router Files
const listingsRouter = require("./routes/listings");
app.use("/api", listingsRouter);

// Starts server by listening to port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});