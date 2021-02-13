/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('./index.js');

const chatSchema = new mongoose.Schema({
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
