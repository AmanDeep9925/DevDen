// TODO:
// [x] : Create a user (i.e. Implement SignUp)
// [] : Creaete a session (i.e. Implement LognIn)
// [] : Show the signed in user profile
// [] : Sign out


const express = require('express');

const router = express.Router();

const userController = require('../controllers/users_controllers');


// users page

router.get('/',userController.user)

router.get('/profile',userController.profile);

router.get('/posts',require('./posts'));

router.get('/login',userController.login);

router.get('/signup',userController.signup);

router.post('/create',userController.create);

router.post('/createSession',userController.createSession);

// router.get('/logout',userController.stopSession);

module.exports = router; 