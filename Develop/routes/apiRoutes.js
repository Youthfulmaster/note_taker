const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // For generating unique ids

const router = express.Router();

// Construct the path to the db.json file
const dbFilePath = path.join(__dirname, '..', 'db', 'db.json');

// API GET Request
router.get('/notes', (req, res) => {
  fs.readFile(dbFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// API POST Request
router.post('/notes', (req, res) => {
  const newNote = { ...req.body, id: uuidv4() };

  fs.readFile(dbFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(newNote);

    fs.writeFile(dbFilePath, JSON.stringify(notes, null, 2), (err) => {
      if (err) throw err;
      res.json(newNote);
    });
  });
});

// Optional: API DELETE Request to handle note deletion
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;

  fs.readFile(dbFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes = notes.filter(note => note.id !== noteId);

    fs.writeFile(dbFilePath, JSON.stringify(notes, null, 2), err => {
      if (err) throw err;
      res.json({ message: 'Deleted note' });
    });
  });
});

module.exports = router;
