/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('../index.js');

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    minLength: 1,
    maxLength: 30,
    required: [true, 'Insert your username!'],
  },
  profilePic: {
    type: String,
  },
  firstName: {
    type: String,
    minLength: 1,
    maxLength: 30,
    required: [true, 'Insert your name!'],
  },
  lastName: {
    type: String,
    minLength: 1,
    maxLength: 30,
    required: [true, 'Insert your name!'],
  },
  email: {
    type: String,
    minLength: 1,
    maxLength: 30,
    required: [true, 'Insert your email!'],
  },

  city: {
    type: String,
    minLength: 1,
    maxLength: 30,
    required: [true, 'Insert your city!'],

  },

  state: {
    type: String,
    minLength: 1,
    maxLength: 30,
    required: [true, 'Insert your city!'],
  },
  petsInfo: {
    name: {
      type: String,
      minLength: 1,
      maxLength: 30,
      required: [true, 'Insert your petsname!'],

    },
    breed: {
      type: String,
      minLength: 1,
      maxLength: 50,
      required: [true, 'Insert breed!'],

    },
    age: {
      type: Number,
      required: [true, 'Insert age!'],
    },
    energyLvl: {
      type: String,
      enum: ['Cool Cucumber', 'Average Joe', 'Energizer Bunny'],
      required: [true, 'Pick a energy level!'],
    },
  },
  wuufPakIds: [{
    type: Number,
  }],
  currentLoc: {
    latitude: {
      type: String,
      minLength: 1,
      maxLength: 30,
    },
    longitude: {
      type: String,
      minLength: 1,
      maxLength: 30,
    },
  },

});

const User = mongoose.model('User', userSchema);

module.exports = User;
