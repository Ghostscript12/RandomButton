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


      var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dev.jaydickson02@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'dev.jaydickson02@gmail.com',
  to: 'wizzie405@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

    };
  })
}).listen(8080);
