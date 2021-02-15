/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('../index.js');

const feedSchema = new mongoose.Schema({
  profileId: {
    type: Number,
  },
  posts: [{
    profileId: {
      type: Number,
    },
    body: {
      type: String,
    },
    date: {
      type: String,
    },
    likes: {
      type: Number,
    },
    comments: [{
      profileId: {
        type: Number,
      },
      comment: {
        type: String,
      },
      date: {
        type: String,
      },
      likes: {
        type: Number,
      },
    }],
  }]

});

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;
