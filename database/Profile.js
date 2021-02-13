/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('./index.js');

const profileSchema = new mongoose.Schema({
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
