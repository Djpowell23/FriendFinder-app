// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
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
        // var newFriend = req.body;
        // res.json(newFriend);
        // friendsData.push(newFriend);

        // Matchmaker
        // Determine the user's most compatible friend using the following as a guide:
        // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
        // With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
        // Example:
        // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
        // Total Difference: 2 + 1 + 2 = 5
        // Convert new user scores to integers

        // Best match object
        var greatMatch = {
            name: '',
            photo: '',
            matchDiff: 1000
        }


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










