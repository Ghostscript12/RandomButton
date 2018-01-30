var PythonShell = require('python-shell');

exports.query = function(scriptPath) {
  var pyshell = new PythonShell(scriptPath);
  pyshell.on('message', function(message) {
    SendMail.email(message, 'wizzie405@gmail.com')
  });

  pyshell.end(function(err) {
    if (err) {
      throw err;
    };

    console.log('finished');
  });
};
