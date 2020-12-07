const router = require('express').Router();
const users = require('./users');
const recipes = require('./recipes');
const likes = require('./likes');

router.use('/users', users);
router.use('/recipes', recipes);
router.use('/likes', likes);

module.exports = router;
