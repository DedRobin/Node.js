const { print } = require('./services');

const handleIssueComment = event => {
  const whoseComment = event?.payload?.issue?.user?.login;
  if (!whoseComment) throw new Error('No user who leaves the comment');

  const url = event?.payload?.issue?.['html_url'];
  if (!url) throw new Error('No issue url');

  const repoName = event?.repo?.name;
  if (!repoName) throw new Error('No repository name');

  const message = `Posted a comment on an issue by '${whoseComment}' in repository '${repoName}'
URL: ${url}`;
  print(message, event);
};

module.exports = handleIssueComment;
