// /* eslint-disable no-console */
// const mongoose = require('mongoose');

// const mongoUrl = 'mongodb://localhost/wuufPak';

// // eslint-disable-next-line max-len
// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log("MongoDB connected!");
// });

module.exports = db;
