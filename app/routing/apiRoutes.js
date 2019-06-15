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
app.post('/api/friends', function(req, res) {
    friendsData.push(req.body);
    res.json(true);

    // Matchmaker
});

}










