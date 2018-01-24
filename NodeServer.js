var http = require('http');
var fs = require('fs');
var url = require('url');
var nodemailer = require('nodemailer');

http.createServer(function(req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    res.end();
    var qdata = url.parse(req.url, true).query;

    if (qdata['key'] == 'true') {

      var myPythonScriptPath = 'RandomSubreddit.py';

      // Use python shell
      var PythonShell = require('python-shell');
      var pyshell = new PythonShell(myPythonScriptPath);

      pyshell.on('message', function(message) {
       //received a message sent from the Python script (a simple "print" statement)
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
          text: message
        };

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
}).listen(80, '0.0.0.0');
