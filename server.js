// Require the Express
var express = require("express");

// Create an express server.
var app = express();

// Set port.
var PORT = process.env.PORT || 3000;

//EXPRESS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// allows us to access the public files
app.use(express.static("public"));

// ROUTES
// important part, most projects will have these two styles of routes
// require("./routes/whatevergoeshere")(app);
require("./routes/APIroutes")(app);
require("./routes/HTMLroutes")(app);

// LISTENER

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});