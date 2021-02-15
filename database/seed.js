const db = require('./index.js');
const Chat = require('./schemas/Chat.js');
const Feed = require('./schemas/Feed.js');
const User = require('./schemas/User.js');
const Pak = require('./schemas/Pak.js');
const sampleData = require('./sampleData.js');

const insertSampleChat = () => Chat.create(sampleData.chat);
const insertSampleFeed = () => Feed.create(sampleData.feed);
const insertSampleUser = () => User.create(sampleData.users);
const insertSamplePak = () => Pak.create(sampleData.pak);

Promise.all([insertSampleChat(), insertSampleFeed(), insertSampleUser(), insertSamplePak()])
  .then(() => {
    db.close();
  })
  .catch();
