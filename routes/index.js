
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

var entry = require('../entry.json');

exports.postentry = function(req, res){
	console.log(entry);
	res.render('PastEntries', entry);
};

exports.profile = function(req, res){
	res.render('ProfilePage');
};

exports.newentry = function(req, res){
	res.render('NewEntry');
};

exports.tagspage = function(req, res){
	res.render('TagsPage');
};
