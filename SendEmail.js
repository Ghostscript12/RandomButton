exports.email = function(message) {
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
};
