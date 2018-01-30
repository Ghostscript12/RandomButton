//Importing modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var SendMail = require('./Modules/SendEmail');
var SendHtml = require('./Modules/SendHtml');
var queryPython = require('./Modules/queryPython');

//Code Starts Here
http.createServer(function(req, res) {

  global.res = res;

  fs.readFile('index.html', SendHtml.Send);
  var qdata = url.parse(req.url, true).query;


  if (qdata['key'] == 'true') {

    queryPython.query('RandomSubreddit.py')
  };

}).listen(80, '0.0.0.0');
