const { print } = require('./services');

const handleCommitComment = event => {
  const comment = event?.payload?.comment?.['body'];
  if (!comment) throw new Error('No comment');

  const url = event?.payload?.comment?.['html_url'];
  if (!url) throw new Error('No comment URL');

  const action = event?.payload?.['action'];
  if (!url) throw new Error('No comment action');

  const message = `Commented on a commit
Action=${action}
Comment: ${comment}
URL: ${url}`;

  print(message, event);
};

module.exports = handleCommitComment;
