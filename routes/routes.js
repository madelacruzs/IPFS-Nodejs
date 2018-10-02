var express = require('express');
var router = express.Router();

// Require controller modules.
var controler = require('../controllers/controler');

//GET: Download base64 Files from IPFS
router.get('/ipfs/:tx_hash', controler.download_fromIPFS);

//POST: Upload base64 Files to IPFS
router.post('/ipfs/', controler.upload_toIPFS);


module.exports = router;
