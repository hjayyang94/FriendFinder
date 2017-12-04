var express = require('express');
var app = express();
var friendsList = ('./../data/friends.js');


module.exports = {
    getInfo : function () { app.get("/api/friends", function (req, res) {
        res.json(friendsList)
    })},

    postInfo : function(){app.post("/api/friends", function (req,res){
        var newFriend = req.body;
        friendsList.append(newFriend);
    })}
} 