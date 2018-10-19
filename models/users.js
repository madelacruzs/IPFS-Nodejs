var mongoose = require('mongoose');  

var user_model = new mongoose.Schema({  
    _id: mongoose.Schema.Types.ObjectId,
    user_id: 
    {
        type: String,
        index: { 
            unique: true 
        },
        required: true
    }
});

var User = mongoose.model('User', user_model );
module.exports = User;