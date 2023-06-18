const express = require('express')
const router = express.Router();
const path = require('path'); 
const { getAllAssets } = require('../../controllers/frontEndData');

router.get('/', getAllAssets);

module.exports = router;