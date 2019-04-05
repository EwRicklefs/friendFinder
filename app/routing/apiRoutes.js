//Data

var friendData = require('../data/friends')



//TODO: make this code work for my shit
module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });

    // API POST Requests
    // ---------------------------------------------------------------------------
  
    app.post("/api/friends", function(req, res) {
        //TODO: Friend selection logic goes here
        //also add to friends.js
    });
  };
  