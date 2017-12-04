var express = require('express');

module.exports = (function() {
    var app = express();

    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../FriendFinder/app/public/survey.html"));
    }),

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../FriendFinder/app/public/home.html"));
    })
    

    return app;
})();