const { print } = require('./services');

const handlePullRequestViewComment = event => {
  const message = "Commented on a pull request's diff";

  print(message, event);
};

module.exports = handlePullRequestViewComment;
