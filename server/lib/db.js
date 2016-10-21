"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tweeter";

var collection;

var methods = {
  saveTweet: (data, cb) => {
    collection.insertOne( { tweet: data }, (err, res) => {
      cb(res);
    })
  },

  getTweets: (callback) => {
    collection.find().toArray((err, res) => {
      callback(res);
    })
  }
};

MongoClient.connect(MONGODB_URI, (err, db) => {

  if (err) {
    console.log('Could not connect! Unexpected error. Details below.');
    return cb(err);
  }

  console.log('Connected to the database!');

  collection = db.collection("tweets");

});

module.exports = {

  connect: (onConnect) => {
    onConnect(methods);
  }

}


