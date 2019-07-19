// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//my code

app.get("/api/timestamp/:date_string?", function (req, res) {
  var date_string = req.params.date_string
  var date = new Date(date_string)
  console.log(Number(date_string))
  console.log(date_string)
  //for 2015-12-25 format
  if(isNaN(Number(date))===false){
    res.json({"unix": date.getTime(), "utc" : date.toUTCString() });
  }else{
    //for 1450137600 format
    if(isNaN(Number(date_string))===false){
      res.json({"unix": parseInt(date_string), "utc" : new Date(date_string * 1000).toUTCString()});
    }else{
      if(date_string===undefined){
        res.json({"unix": new Date().getTime()/1000, "utc" : new Date().toUTCString()});
      }else{
        res.json({"unix": null, "utc" : "Invalid Date" });
      }
    }
  }
});
