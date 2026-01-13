const { appendDateTime } = require('./services');

const handlePullRequestViewComment = event => {
  const url = event?.payload?.comment?.['html_url'];
  if (!url) throw new Error('No comment URL');

  const message = `Commented on a pull request's diff
URL: ${url}`;

  return appendDateTime(message, event);
};

module.exports = handlePullRequestViewComment;
