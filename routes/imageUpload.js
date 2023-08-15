const express = require('express');
const { imageUpload } = require('../controllers/userController/imagetest');
const router = express.Router();

router.post('/', imageUpload );


module.exports = router