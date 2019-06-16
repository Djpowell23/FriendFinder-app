// ===============================================================================
// LOAD DATA
// ===============================================================================
var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // Push the JSON to the friendsArray
    app.post('/api/friends', function (req, res) {
        // Best match object
        var greatMatch = {
            name: '',
            photo: '',
            matchDiff: 1000
        }

        // Access to user information
        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        var totalDiff = 0;
        // Loop through friendsData array to get each user's scores
        for (var i = 0; i < friendsData.length; i++) {
            // console.log(friendsData[i].name);
            totalDiff = 0;

            // Loop through friends score and user score and calculate the absolute difference
            // between the two and push that to totalDiff variable.
            for (var j = 0; j < 10; j++) {
                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
                // if the current matchup is lower than previous matchups, push new matchup
                if (totalDiff <= greatMatch.matchDiff) {
                    greatMatch.name = friendsData[i].name;
                    greatMatch.photo = friendsData[i].photo;
                    greatMatch.matchDiff = totalDiff
                }
            }
        }
        friendsData.push(userData);
        res.json(greatMatch);
        console.log(greatMatch);
    });

}










