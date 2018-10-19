var express = require('express');
var router = express.Router();

// Require controller modules.
var controler = require('../controllers/controler');
var users_controler = require('../controllers/db_users');

//Login for MONGO DB
// var login_jwt = require('../controllers/login_jwt');

// IPFS
//GET: Download base64 Files from IPFS
// router.get('/ipfs/:tx_hash', login_jwt.verifyToken, controler.download_fromIPFS);
router.get('/ipfs/:tx_hash', controler.download_fromIPFS);

//POST: Upload base64 Files to IPFS
// router.post('/ipfs/', login_jwt.verifyToken, controler.upload_toIPFS);
router.post('/ipfs/', controler.upload_toIPFS);

// USERS
//POST: Save new User
// router.post('/users/', users_controler.db_users_save);

// //LOGIN
// router.post('/login/', login_jwt.login);


module.exports = router;
