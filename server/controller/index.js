const feed = require('./feed.js');
// chat
// profile

module.exports = {
  // getReviews: (req, res) => reviews(req, res),
  getFeed: (req, res) => feed(req, res),
};
