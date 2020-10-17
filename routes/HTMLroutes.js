var path = require("path");
var router = require("express").Router();

// ---------------------------------------------------------------------------
// dont touch above
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// ---------------------------------------------------------------------------
// notes above
// homepage slash/no URL resulting page
// default to home
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = router