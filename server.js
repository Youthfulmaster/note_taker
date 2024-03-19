const express = require('express');
const path = require('path'); // Require the path module
const routes = require(path.join(__dirname, 'routes', 'apiRoutes')); // Adjusted require statement

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files

// Use routes defined in apiRoutes.js
app.use('/api', routes);

// GET Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// GET Route for notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
