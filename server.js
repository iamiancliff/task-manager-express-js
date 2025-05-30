// Description: A simple Express server that connects to a MongoDB database.
// It listens on port 3000 and uses JSON middleware for request parsing.
// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes'); // Assuming you have a routes.js file for task routes

// Create an Express app
const app = express();

// Create Express server and Middleware
app.use(express.json());

// Constants
const mongoURI = 'mongodb://localhost:27017/taskdb';    
const PORT = 3000;

// MongoDB connection
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// use task routes
app.use('/', taskRoutes);

 // Fire up the Express server  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
