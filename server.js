var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use('*', function(req, res) {
  res.sendfile('src/index.html')
})

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);





