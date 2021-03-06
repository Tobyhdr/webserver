var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About me and my homies yo');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
	console.log('Server running on port ' + PORT + '...');
});