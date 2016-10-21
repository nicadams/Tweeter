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
    let tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now()
    };
    db.saveTweet(tweet, () =>{
      return res.json(tweet);
    });
  });

  return tweets;

}
