// Dependency
var path = require('path');

module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    // A default, catch-all route that leads to home.html which displays the home page.
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};

