const { appendDateTime } = require('./services');

const handlePullRequestViewThread = event => {
  const message = 'Resolved or reopened a review thread';

  return appendDateTime(message, event);
};

module.exports = handlePullRequestViewThread;
