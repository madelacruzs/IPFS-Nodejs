var mongoose = require('mongoose');
var users_model = require('../models/users');

exports.db_users_save = function(req, res) {
    var result = [];
    // var user_id = req.params.user_id;
    var user_id = req.body.user_id;
    users_model.find({user_id : user_id }, function (err, docs) {
        //If Exists in DB
        if (docs.length > 0){
            result.push({
                result: "OK",
                message: "user_id already exists.",
            });   

            res.status(500).send(result);
        }else{
            //Object new user
            var newId = new mongoose.Types.ObjectId();
            var newUser = new users_model ({
                _id: newId,
                user_id: user_id
            });
            //Save new User
            newUser.save(function(err) {
                if (err){
                    res.status(500).send(err);
                }
                result.push({
                    result: "OK",
                    _id: newId,
                    user_id: user_id
                });
                res.status(200).send(result);
            }); 
        }
    });

};