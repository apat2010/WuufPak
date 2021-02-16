/* eslint-disable no-console */
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'client', 'dist');
const { getUserInfo, getPakInfo, getFeedInfo, getChatInfo, getFeedProfiles, getChatProfiles } = require('./controller');

app.use(compression());
app.use(express.json());

app.use(express.static(PUBLIC_DIR));
console.log('in the index')
app.get('/api/user', getUserInfo);
app.get('/api/pak/:wuufPakIds', getPakInfo);
app.get('/api/chat/:wuufPakIds', getChatInfo);
app.get('/api/feed/:userId', getFeedInfo);

app.get('/api/feedProfiles/:postProfiles', getFeedProfiles);
app.get('/api/chatProfiles/:chatProfiles', getChatProfiles);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
