"use strict";

/* jshint node: true */

// To start the webserver run `node webServer.js`
var express = require('express');
var app = express();
var AWS = require('aws-sdk');
var cors = require('cors');
var credentials = require('./credentials');

var async = require('async');
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cors());


AWS.config.update({
	accessKeyId: credentials.accessKey,
	secretAccessKey: credentials.accessKeySecret,
});

var s3 = new AWS.S3();

app.get('/datasets/list', function(request, response) {
	let params = {
		Bucket: credentials.bucket,
		Key: "test.json",
	};

	s3.getObject(params, function(error, data) {
		if (error) {
			console.error('Error fetching datasets', error);
			response.status(500).send('Error fetching data from S3');
			return;
		}

		if (data.length === 0) {
			console.error('Dataset list', 'Data object empty on return from S3');
			response.status(500).send('No data returned from S3');
			return;
		}

		// now data is an object that contains the contents in data.Body
		var array = JSON.parse(new Buffer(data.Body).toString("utf8"));
		console.log(array);
		response.end(JSON.stringify(array));
	});
});

var server = app.listen(9000, function () {
    var port = server.address().port;
    console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});