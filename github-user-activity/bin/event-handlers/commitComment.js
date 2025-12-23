const { print } = require('./services');

const handleCommitComment = event => {
  const comment = event?.payload?.comment?.['body'];
  if (!comment) throw new Error('No comment');

  const url = event?.payload?.comment?.['html_url'];
  if (!url) throw new Error('No comment URL');

  const commentOwner = event?.payload?.comment?.user?.login;
  if (!commentOwner) throw new Error('No user who leave comment');

  const repoName = event?.repo?.name;
  if (!repoName) throw new Error('No repository name');

  const message = `Commented on a commit by user '${commentOwner}' in repository '${repoName}'
URL: ${url}`;

  print(message, event);
};

module.exports = handleCommitComment;
