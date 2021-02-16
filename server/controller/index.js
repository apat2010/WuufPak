const { userInfo, pakInfo } = require('./user');
const {feedInfo, feedProfiles} = require('./feed');
const {chatInfo, chatProfiles} = require('./chat');

module.exports = {
  // getReviews: (req, res) => reviews(req, res),
  getUserInfo: (req, res) => userInfo(req, res),
  getPakInfo: (req, res) => pakInfo(req, res),
  getFeedInfo: (req, res) => feedInfo(req, res),
  getChatInfo: (req, res) => chatInfo(req, res),
  getFeedProfiles: (req, res) => feedProfiles(req, res),
  getChatProfiles: (req, res) => chatProfiles(req, res),
};
