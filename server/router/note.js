const express = require("express");

const { getUserNote, createNote, getUserAllNotes } = require("../controllers/note")

const router = express.Router();


// Get a Note API
router.route("/:id").get(getUserNote);

// Get user all notes
router.route('/:email').get(getUserAllNotes);

// Create API
router.route("/").post(createNote);

module.exports = router;