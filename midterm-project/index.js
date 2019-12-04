var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var _ = require("underscore");
var housingDataUtil = require("./housing-data-util");
var fs = require("fs");
var Handlebars = require("handlebars");

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));

var _DATA = housingDataUtil.loadData().housing;
 housingDataUtil.restoreOriginalData();
/* Add whatever endpoints you need! Remember that your API endpoints must
 * have '/api' prepended to them. Please remember that you need at least 5
 * endpoints for the API, and 5 others.
 */

app.get('/',function(req,res){
  res.render('home', {data: _DATA});
})

app.get('/listHousing', function(req, res){
	res.render('list', {});
})

app.get('/apartments', function(req, res){
	var temp = _.filter(_DATA, function(a) {
		return a.housingType == 'apartment';
	});
	res.render('apt', {data: temp});
});

app.get('/townhouses', function(req, res){
	var temp = _.filter(_DATA, function(a) {
		return a.housingType == 'townhouse';
	});
	res.render('townhouse', {data: temp});
});

app.get('/expensive', function(req, res){
	var temp = _.filter(_DATA, function(a) {
		return a.price > 1000;
	});
	res.render('expensive', {data: temp});
});

app.get('/houses', function(req, res){
	var temp = _.filter(_DATA, function(a) {
		return a.housingType == 'house';
	});
	res.render('house', {data: temp});
});

app.get('/furnished', function(req, res){
	var temp = _.filter(_DATA, function(a) {
		return a.furnished.toLowerCase() == 'yes';
	});
	res.render('house', {data: temp});
});

app.post('/listHousing', function(req, res){
	var content = req.body;
	content.features = content.features.split("\,");
	content.price = parseInt(content.price);
	content.housingType = content.housingType.toLowerCase();
	_DATA.push(req.body);
	housingDataUtil.saveData(_DATA);
	res.redirect("/");
});

app.get('/api/getHousing', function(req, res){
	res.json(_DATA)
});

app.post('/api/listHousing', function(req, res){
	var content = req.body;
	content.features = content.features.split("\,");
	content.price = parseInt(content.price);
	content.housingType = content.housingType.toLowerCase();
	_DATA.push(req.body);
	housingDataUtil.saveData(_DATA);
});

app.get('/name_has', function(req, res){
	res.render('search', {data: _DATA});
});

app.get('/name_has/:n', function(req, res){
	var check = req.params.n;
	check = check.toLowerCase();
	var filter = _.filter(_DATA, function(a) {
		var name = a.building.toLowerCase();
		return name.includes(check);
	});
	if (filter == []) {
		res.render('search', {data: []})
	} else {
		res.render('search', {data: filter});
	}
});

app.listen(3000, function() {
    console.log('Listening on port 3000!');
});
