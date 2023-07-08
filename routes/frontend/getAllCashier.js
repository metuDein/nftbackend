const express = require('express')
const router = express.Router();

const {  getAllCashier } = require('../../controllers/frontEndData');

router.get('/', getAllCashier);

module.exports = router;