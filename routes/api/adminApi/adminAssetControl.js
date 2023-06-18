const express = require('express');
const { AdminCreateAsset, adminEditAsset } = require('../../../controllers/adminAssetcontroller/adminAssetsController');
const router = express.Router()


router.route('/')
.post(AdminCreateAsset)
.put(adminEditAsset)





module.exports = router;