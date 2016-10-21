"use strict";

const User    = require("../lib/user-helper")
const express = require('express');
const tweets  = express.Router();

module.exports = function(db) {

  tweets.get("/", function(req, res) {

    let tweets = db.getTweets(function(tweets) {
        return res.json(tweets);
    });

  });

  tweets.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400);
      return res.send("{'error': 'invalid request'}\n");
    }

    let user = req.body.user ? req.body.user : User.generateRandomUser();
    let days = Math.round(Date.now() / (1000*60*60*24*100000));
    let tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: days
    };
    db.saveTweet(tweet, () =>{
      return res.json(tweet);
    });
  });

  return tweets;

}
