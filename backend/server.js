
const mongo = require('mongoose')
// Connection URI


const express = require("express");
require("dotenv").config();

// Import routes
const routes = require("./routes");

// Create Express app
const app = express();
const cors = require("cors");
// Middleware
app.use(express.json());
app.use(cors());
// Connect to MongoDB
mongo.connect('mongodb://127.0.0.1:27017/db2')
.then((()=>{console.log("connected to DB")}))
// Routes
app.use("/api", routes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});