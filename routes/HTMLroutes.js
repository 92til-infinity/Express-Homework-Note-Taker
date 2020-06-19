var path = require("path");


  // ---------------------------------------------------------------------------
// dont touch above
  // ---------------------------------------------------------------------------

module.exports = function(app) {

  // ---------------------------------------------------------------------------

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
    // ---------------------------------------------------------------------------
// notes above

// homepage slash/no URL resulting page

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};