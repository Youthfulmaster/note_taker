const express = require('express');
const routes = require('./routes'); // Import routes module
const { v4: uuidv4 } = require('uuid'); // For generating unique ids

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files

// Use routes defined in routes.js
app.use('/routes', routes);

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
