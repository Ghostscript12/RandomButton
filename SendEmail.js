exports.email = function(message) {
//Sets up the email credential
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

var mailOptions = {
  from: '',
  to: '',
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
};
