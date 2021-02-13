/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('./index.js');

const feedSchema = new mongoose.Schema({
});

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;
