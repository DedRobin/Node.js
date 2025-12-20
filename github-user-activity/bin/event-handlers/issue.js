const { print } = require('./services');

const handleIssue = event => {
  const message = 'Opened, closed, or managed an issue';

  print(message, event);
};

module.exports = handleIssue;
