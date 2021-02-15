const Feed = require('../../database/schemas/Feed.js');
const User = require('../../database/schemas/User.js');

const homePage = (req, res) => {
  // const { propertyId } = req.params;
  // const query = Reviews.where({ listing_id: propertyId });
  // query.findOne((err, userReviews) => {
  //   if (err) {
  //     res.status(404).send(err);
  //   } else {
  //     res.send(userReviews);
  //   }
  // });

  res.send([]);
};

module.exports = homePage;
