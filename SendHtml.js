exports.Send = function(err, data) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  if (err) {
    res.write(err);
    res.end()
  } else {
    res.write(data);
    res.end();
  };
};
