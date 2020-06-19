// TODO:
// [x] : Create a user (i.e. Implement SignUp)
// [] : Creaete a session (i.e. Implement LognIn)
// [] : Show the signed in user profile
// [] : Sign out


const express = require('express');

const router = express.Router();
const passport = require('passport');


const userController = require('../controllers/users_controllers');


// users page

router.get('/',userController.user)

router.get('/profile/:id',passport.checkAuthentication,userController.profile);
router.post('/update/:id',passport.checkAuthentication,userController.update);

// router.get('/posts',require('./posts'));

router.get('/login',userController.login);

router.get('/signup',userController.signup);

router.post('/create',userController.create);

// use passport as a middleware to authenticate
router.post('/createSession',passport.authenticate(
    'local',
    {failureRedirect : '/users/login'}),
    userController.createSession
);

router.get('/logout',userController.destroySession);

module.exports = router; 