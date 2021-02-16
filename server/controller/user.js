const Feed = require('../../database/schemas/Feed.js');
const User = require('../../database/schemas/User.js');
const Pak = require('../../database/schemas/Pak.js');

const userInfo = (req, res) => {
  const resData = {};
  const username = "barks4dayz";
  let userId;
  let wuufPakIds = [];

  const userQuery = User.where({ username: username });
  userQuery.findOne((err, userData) => {
    if (err) {
      res.status(404).send(err);
    } else {
      resData.user = userData;
      userId = userData.id;
      wuufPakIds = userData.wuufPakIds;
      res.send(resData);
    }
  });

};

const pakInfo = (req, res) => {
  let wuufPakData;
  let wuufPakIds = [];
  let rawIds = req.params.wuufPakIds;
  rawIds = rawIds.split(',');
  rawIds.map( (str) => {
    wuufPakIds.push(Number(str))
  })

  console.log(wuufPakIds)

  const query = Pak.where({id: wuufPakIds});
  query.find((err, pakData) => {
    if (err) {
      res.status(404).send(err);
    } else {
      console.log(pakData)
      res.status(200).send(pakData);
    }
  });

}

module.exports = {userInfo, pakInfo};
