var express = require('express');
var friendsList = require('../data/friends.js');


module.exports = function (app, friendsList) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsList)
    });

    app.post('/add', function (req, res) {
        var newFriend = req.body;
        var listOfFriends = friendsList;
        var match = [];
        //adding new friend to list

        for (var i = 0; i < newFriend.score; i++) {
            newFriend.score[i] = parseInt(newFriend.score[i]);
        }

        //finding best match from existing list before adding friend

        for (var i = 0; i < listOfFriends.length; i++) {
            var difference = 0;

            for (var j = 0; j < listOfFriends[i].scores.length; j++) {
                if (newFriend.scores[j] !== listOfFriends[i].scores[j]) {
                    difference += Math.abs(newFriend.scores[j] - listOfFriends[i].scores[j]);
                }
            }
            match.push(difference);
        }

        var index = match.indexOf(Math.min.apply(Math, match));
        
        friendsList.push(newFriend);
        res.send(listOfFriends[index]);
    })

}