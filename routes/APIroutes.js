const router = require("express").Router();
const store = require("../db/store");
// ----------------------------
// dont touch above
// ----------------------------
// post, get, and delete methods below
// ----------------------------

router.get("/notes", function (req, res) {
  store
    .readNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});
router.post("/notes", function (req, res) {
  store
    .addNote(req.body)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});
router.delete("/notes/:id", function (req, res) {
  store
    .removeNote(req.params.id)
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
