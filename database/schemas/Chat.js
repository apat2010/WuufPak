/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('../index.js');

const chatSchema = new mongoose.Schema({
  conversation: [{
    profileId: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
    date: {
      type: String,
    },
  }],
  associatedUsers: [{
    profileId: {
      type: Number,
      required: true,
    },
  }],
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
