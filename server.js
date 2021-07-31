const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const path = require("path");

// Initialise express
const app = express();
// Set port
const port = process.env.PORT || 5000;
// setup cors
app.use(cors());
// setup morgan
app.use(logger("dev"));

// Serve static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/build"));
}

// add json middleware
app.use(express.json());
// add url-encoded middleware
app.use(express.urlencoded({ extended: true }));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
