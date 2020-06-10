const express = require("express");
const router = express.Router();

const postsController = require('../controllers/posts_controllers');

// router.get('/',postsController.posts);

router.post('/create',postsController.create);

module.exports = router;