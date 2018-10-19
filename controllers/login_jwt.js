var mongoose = require('mongoose');
var jwt = require("jsonwebtoken");
var config = require('../config');
var users_model = require('../models/users');

exports.login = function(req, res) {
    var user_id = req.body.user_id;
    var result = [];

    users_model.find({user_id : user_id }, function (err, docs) {
        //If Exists in DB
        if (docs.length > 0){
            let _user = docs[0];
             // create a token
            var token = jwt.sign({ _user }, config.jwt.secret_key, {
                expiresIn: 86400 // expires in 24 hours
            });

            result.push({
                auth: true,
                token: token
            });
            res.status(200).send(result);

        }else{
            result.push({
                result: "OK",
                message: "user_id no exists.",
            });   
            res.status(500).send(result);
        }
    });
}

// Verify Token
exports.verifyToken = function(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware

        jwt.verify(req.token, config.jwt.secret_key, (err, authData) => {
            if(err) {
                res.sendStatus(403);
            } else {
                next();
            }
        });
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}