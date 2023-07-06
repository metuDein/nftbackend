const express = require('express')
const router = express.Router();

const {  getAllBlogPosts } = require('../../controllers/frontEndData');

router.get('/', getAllBlogPosts);

module.exports = router;