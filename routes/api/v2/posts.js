const express = require('express');
const router = express.Router();
const postApi = require('../../../controllers/api/v2/postsApi');

router.get('/',postApi.index);

module.exports = router;