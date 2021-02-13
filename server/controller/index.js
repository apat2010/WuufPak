const feed = require('./feed.js');

module.exports = {
  // getReviews: (req, res) => reviews(req, res),
  getFeed: (req, res) => feed(req, res),
};
