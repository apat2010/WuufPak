const Chat = require('../../database/schemas/Chat.js');
const User = require('../../database/schemas/User.js');

const chatInfo = (req, res) => {
  let wuufPakIds = [];
  let rawIds = req.params.wuufPakIds;
  rawIds = rawIds.split(',');
  rawIds.map( (str) => {
    wuufPakIds.push(Number(str))
  })

  const query = Chat.where({ wuufPakId: wuufPakIds });
  query.find((err, chatData) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(chatData);
    }
  });

};

const chatProfiles = (req, res) => {
  let chatProfileIds = [];
  let rawIds = req.params.chatProfiles;
  rawIds = rawIds.split(',');
  rawIds.map( (str) => {
    chatProfileIds.push(Number(str))
  })
  console.log(chatProfileIds);

  const query = User.where({ id: chatProfileIds });
  query.find((err, chatData) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(chatData);
    }
  });

};

module.exports = {chatInfo, chatProfiles}


