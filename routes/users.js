const express = require('express');

const router = express.Router();

const userController = require('../controllers/users_controllers');


// users page

router.get('/',userController.user)

router.get('/profile',userController.profile);

router.get('/posts',require('./posts'));

module.exports = router; 