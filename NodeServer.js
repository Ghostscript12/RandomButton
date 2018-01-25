//Importing modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var nodemailer = require('nodemailer');
//Http server for dealing with connections
http.createServer(function(req, res) {
  //Read html
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    //Send html to client
    res.write(data);
    res.end();
    //Parse the url to check for requests
    var qdata = url.parse(req.url, true).query;
    //Confirms a request was placed
    if (qdata['key'] == 'true') {
      //Executes python script and reads response
      var myPythonScriptPath = 'RandomSubreddit.py';

      // Use python shell
      var PythonShell = require('python-shell');
      var pyshell = new PythonShell(myPythonScriptPath);
//received a message sent from the Python script (a simple "print" statement)
      pyshell.on('message', function(message) {

        //Sets up the email credential
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'dev.jaydickson02@gmail.com',
            pass: '02jd.pass0706'
          }
        });

        var mailOptions = {
          from: 'dev.jaydickson02@gmail.com',
          to: 'wizzie405@gmail.com',
          subject: 'Your Random SubReddit!',
          text: message //The reply sent from then python script
        };
        //Sends the email
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      });

      // end the input stream and allow the process to exit
      pyshell.end(function(err) {
        if (err) {
          throw err;
        };

        console.log('finished');
      });




    };
  })
  //Listens on port 80 for incoming connections from external ips
}).listen(80, '0.0.0.0');
