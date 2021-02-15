/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('../index.js');

const pakSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  profiles: [{
    type: Number,
  }],
});

const Pak = mongoose.model('Pak', pakSchema);

module.exports = Pak;
