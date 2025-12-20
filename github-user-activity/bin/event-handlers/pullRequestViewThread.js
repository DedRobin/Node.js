const { print } = require('./services');

const handlePullRequestViewThread = event => {
  const message = 'Resolved or reopened a review thread';

  print(message, event);
};

module.exports = handlePullRequestViewThread;
