const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);



