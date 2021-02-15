/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('../index.js');

const chatSchema = new mongoose.Schema({
  wuufPakId: {
    type: Number,
  },
  conversation: [{
    profileId: {
      type: Number,
    },
    comment: {
      type: String,
    },
    date: {
      type: String,
    },
  }],
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
