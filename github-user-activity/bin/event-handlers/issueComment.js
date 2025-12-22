const { print } = require('./services');

const handleIssueComment = event => {
  const whoseComment = event?.payload?.issue?.user?.login;
  if (!whoseComment) throw new Error('No user who leaves the comment');

  const title = event?.payload?.issue?.title;
  if (!title) throw new Error('No issue title');

  const url = event?.payload?.issue?.['html_url'];
  if (!url) throw new Error('No issue url');

  const comment = event?.payload?.issue?.body;
  if (!comment) throw new Error('No issue body');

  const message = `Posted a comment on an issue by ${whoseComment}
Title: ${title}
Comment: ${comment}
URL: ${url}`;
  print(message, event);
};

module.exports = handleIssueComment;
