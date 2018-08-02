const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

// app.use('/*', function(req,res) {
//   // res.sendfile(__dirname + '/src/index.html');
//
//   res.sendFile(__dirname+'/dist/src/index.html');
// });
