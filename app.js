'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/app'));
app.use('/ngCsp', express.static(__dirname + '/app/ngCsp/'));
app.use('/bower_components', express.static(__dirname + '/app/bower_components/'));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});