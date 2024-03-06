const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // Serve static files from the public directory

app.listen(PORT, () => {
    console.log(`Note Taker app listening at http://localhost:${PORT}`);
});


