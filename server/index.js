"use strict";

const PORT        = 8080;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tweeter";

const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();

const tweetsApi  = require('./api/tweets');
const db         = require('./lib/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var onConnect = function(dbInstance) {
  app.use('/tweets', tweetsApi(dbInstance));
}

db.connect(onConnect);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});


