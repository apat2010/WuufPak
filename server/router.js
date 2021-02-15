const router = require('express').Router();
const controller = require('./controller/index');

router.get('/', controller.getHomePage);
// router.use('/chat', controller.getChat);
// router.use('/maps', controller.getMaps);
// router.use('/profile', controller.getProfile);

module.exports = router;
