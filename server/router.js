const router = require('express').Router();
const controller = require('./controller/index');

router.get('/:profileId/feed', controller.getFeed);

module.exports = router;
