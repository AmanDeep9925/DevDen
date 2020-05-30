// Requiring the express 
const express = require('express');

// Accessing the router function

const router = express.Router();

// getting the controller

const aboutController = require('../controllers/about_Controller');

router.get('/',aboutController.about);

// exporting the router
module.exports = router;