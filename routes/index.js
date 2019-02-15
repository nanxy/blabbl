
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index');
};

exports.homepage = function(req, res){
  res.render('HomePage');
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

exports.tagentries = function(req, res){
	res.render('TagEntries');
};

exports.viewentry = function(req, res){
	res.render('EntryContent');
};

exports.prompt1 = function(req, res){
	res.render('Prompt1');
};

exports.prompt2 = function(req, res){
	res.render('Prompt2');
};
