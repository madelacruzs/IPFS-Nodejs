var mongoose = require('mongoose');
var config = require('../config');

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(config.MONGODB, {   
    useNewUrlParser: true 
}, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + config.MONGODB + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + config.MONGODB);
    }
});

mongoose.set('useCreateIndex', true);
