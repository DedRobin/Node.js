const { print } = require('./services');

const handleIssueComment = event => {
  const message = 'Posted a comment on an issue';
  print(message, event);
};

module.exports = handleIssueComment;
