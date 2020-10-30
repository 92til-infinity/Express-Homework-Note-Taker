// Require the Express
var express = require("express");
var APIroutes = require("./routes/APIroutes");
var HTMLroutes = require("./routes/HTMLroutes");
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
// require("./routes/APIroutes")(app);
// require("./routes/HTMLroutes")(app);
app.use("/api", APIroutes);
app.use("/", HTMLroutes);
// LISTENER

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
