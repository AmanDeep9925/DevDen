const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');



router.get('/',homeController.home);

// Login in and SignUp routes

router.use('/users',require('./users'));

// router.get('/practice',homeController.practice);

// router.get('/about',homeController.practice);

// Post router

router.use('/posts',require('./posts')); 

// Comments route

router.use('/comments',require('./comments'));


// For any other route

// router.use('/routeName',require('routerFile'));
router.use('/about',require('./about'));


// console.log("router loaded")

module.exports = router;