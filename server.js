// Require the Express
var express = require("express");

// Create an express server.
var app = express();

// Set port.
var PORT = process.env.PORT || 3000;

//EXPRESS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES

require("./routes/APIroutes")(app);
require("./routes/HTMLroutes")(app);

// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});