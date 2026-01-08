const { appendDateTime } = require('./services');

const handlePullRequestViewComment = event => {
  const message = "Commented on a pull request's diff";

  return appendDateTime(message, event);
};

module.exports = handlePullRequestViewComment;
