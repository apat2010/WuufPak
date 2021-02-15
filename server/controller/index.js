const homePage = require('./homepage.js');
// chat
// profile

module.exports = {
  // getReviews: (req, res) => reviews(req, res),
  getHomePage: (req, res) => homePage(req, res),
};
