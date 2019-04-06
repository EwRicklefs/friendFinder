
//Data
var friendData = require('../data/friends')

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
        var currFriend = req.body.vals
        var bestCompatIndex = 0
        var bestCompatVal = 100
        for (var i = 0; i<friendData.length; i++) {
          var totalCompat = 0
          var compArr = friendData[i].vals
          for (var j = 0; j<10; j++) {
            var curFVal = parseInt(currFriend[j])
            var compFVal = parseInt(compArr[j])
            totalCompat += Math.abs(curFVal - compFVal)
          }
          if (bestCompatVal > totalCompat) {
            bestCompatVal = totalCompat
            bestCompatIndex = i
          }
        }
        res.json(friendData[bestCompatIndex])
        friendData.push(req.body)
    });
  };
  