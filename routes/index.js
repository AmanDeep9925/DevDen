const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);

// router.get('/practice',homeController.practice);

// router.get('/about',homeController.practice);

router.use('/users',require('./users'));


// For any other route

// router.use('/routeName',require('routerFile'));
router.use('/about',require('./about'));


// console.log("router loaded")

module.exports = router;