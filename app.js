var express = require('express');
var routes = require('./routes');
var app = express();
var mysql = require('mysql');
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({
	extended: false
}));
var router= express.Router();

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'mohit983',
	database:'SYNERGYGO'
});

connection.connect(function(err) {
	if(err)
		console.log("Error Connecting to the Database");
	else
		console.log("Connected");
});

routes.configure(app);

var server = app.listen(3000,function() {
	console.log('Server listening on port :' + server.address().port);
});