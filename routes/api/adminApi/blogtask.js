const express = require('express');
const router = express.Router()
const { createPost } = require('../../../controllers/userController/BlogPostController');

router.route('/')
.post(createPost);


module.exports = router