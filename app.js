var express = require("express");
var bodyParser = require("body-parser");

var config = require('./config');
// var connect = require("./db/connect");
var routes = require("./routes/routes");

var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

  
app.use("/api", routes);

const PORT = process.env.PORT || config.PORT

var server = app.listen(PORT, function () {
    console.log("app running on port.", PORT); 
}); 
