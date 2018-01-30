//Importing modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var SendMail = require('./SendEmail');
var SendHtml = require('./SendHtml');
var queryPython = require('./queryPython');

//Code Starts Here
http.createServer(function(req, res) {

  global.res = res;

  fs.readFile('index.html', SendHtml.Send);
  var qdata = url.parse(req.url, true).query;


  if (qdata['key'] == 'true') {

    queryPython.query('RandomSubreddit.py')
  };

}).listen(80, '0.0.0.0');
