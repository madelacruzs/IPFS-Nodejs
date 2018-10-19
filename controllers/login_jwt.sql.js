var jwt = require("jsonwebtoken");
var config = require('../config');
var sql = require('mssql');


exports.login = function(req, res) {
    var user_id = req.body.user_id;
    var response = [];

    sql.connect(config.MSSQL).then(pool => {
        // Query
        return pool.request()
        .input('id_user', sql.VarChar, user_id)
        .query('SELECT * FROM USUARIOS');
    }).then(result => {
        sql.close();
        // If Exists in DB
        if (result.recordsets[0].length> 0){
            let _user = result.recordset[0];
             // create a token
            var token = jwt.sign({ _user }, config.jwt.secret_key, {
                expiresIn: 86400 // expires in 24 hours
            });
            response.push({
                result: "OK",
                auth: true,
                token: token
            });
            res.status(200).send(response);
        }else{
            response.push({
                result: "OK",
                message: "user_id no exists.",
            });   
            res.status(500).send(response);
        }
    }).catch(err => {
        console.log(err);
        response.push({
            result: "ERROR",
            error: err,
        });   
        sql.close();
        res.status(500).send(response);    
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