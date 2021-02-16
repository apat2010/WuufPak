const Feed = require('../../database/schemas/Feed.js');
const User = require('../../database/schemas/User.js');

const feedInfo = (req, res) => {
  const {userId} = req.params;

  const query = Feed.where({ profileId: userId });
  query.findOne((err, feedData) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(feedData);
    }
  });
};

const feedProfiles = (req, res) => {
  let postProfileIds = [];
  let rawIds = req.params.postProfiles;
  rawIds = rawIds.split(',');
  rawIds.map( (str) => {
    postProfileIds.push(Number(str))
  })

  const query = User.where({ id: postProfileIds });
  query.find((err, userData) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(userData);
    }
  });
};

module.exports = {feedInfo, feedProfiles};