var fs = require('fs');
var nodemailer = require('nodemailer');

exports.email = function(message, toEmail) {
//Sets up the email credential
fs.readFile('password.txt', function(err, data) {
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dev.jaydickson02@gmail.com',
    pass: data
  }
});

var mailOptions = {
  from: 'dev.jaydickson02@gmail.com',
  to: toEmail,
  subject: 'Your Random SubReddit!',
  text: message //The reply sent from the python script
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

};
