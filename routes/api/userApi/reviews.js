const express = require('express');
const router = express.Router()
const { createReview } = require('../../../controllers/userController/reviewController');

router.route('/')
.post(createReview);


module.exports = router