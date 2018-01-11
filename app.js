var path = require('path');
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var request = require('request');

var app = express();

// Static Files


// Middleware
app.use(morgan('dev'));

// Routes
app.get('/', function(req, res){
    res.send('Hello world');
});

app.get('/check', function(req, res) {
    var link = req.query.url;
    
    if (link) {
        //
    } else {
        res.send("Link was not valid");
    }

});

// Port Listener
app.listen(port, function(){
    console.log('Server started on Port ' + port + '...');
});