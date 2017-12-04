// Dependencies
// ===============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var friendsList = require('./app/data/friends.js');
var fs = require('fs');

// Setting up Express App
// ================================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// =================================================================

require('./app/routing/apiRoutes.js')(app, friendsList);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function () {
    console.log("App Listening on Port " + PORT);
});