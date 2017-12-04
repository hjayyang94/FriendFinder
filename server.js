// Dependencies
// ===============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var friendsList = require('./app/data/friends.js');
var fs = require('fs');

// Setting up Express App
// ================================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =================================================================
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../FriendFinder/app/public/survey.html"));
})

app.get("/api/friends", function (req, res) {
    res.json(friendsList)
});

app.post('/api/friends', function (req, res) {
    var newFriend = req.body;

    for (var i = 0; i < newFriend.score; i++){
        newFriend.score[i] = parseInt(newFriend.score[i]);
    }
    friendsList.push(newFriend);
    //fs.writeFile
})

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../FriendFinder/app/public/home.html"));
})

app.listen(PORT, function () {
    console.log("App Listening on Port " + PORT);
});