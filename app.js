var express = require("express");
var bodyParser = require("body-parser");

var routes = require("./routes/routes");

var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use("/api", routes);

const PORT = process.env.PORT || 10001

var server = app.listen(PORT, function () {
    console.log("app running on port.", PORT); 
}); 
