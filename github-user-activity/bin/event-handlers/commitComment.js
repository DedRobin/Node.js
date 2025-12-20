const { print } = require('./services');

const handleCommitComment = event => {
  const message = 'Commented on a commit';

  print(message, event);
};

module.exports = handleCommitComment;
