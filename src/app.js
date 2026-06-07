// src/app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Sibling path: stays inside src/

const app = express();

// Accumulator Middleware: Marshals raw stream buffers into clean JavaScript objects
app.use(express.json());

// Application Routing Boundaries
app.use('/api/users', userRoutes);

// Fallback Route for Missing Endpoints
app.use((req, res) => {
    res.status(404).json({ error: "Not Found", message: "The requested route does not exist." });
});

module.exports = app;