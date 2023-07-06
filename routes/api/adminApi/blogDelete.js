const express = require('express');
const router = express.Router()
const { deletePost } = require('../../../controllers/userController/BlogPostController');

router.route('/')
.post(deletePost);


module.exports = router