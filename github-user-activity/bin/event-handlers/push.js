const { getRepositoryUrl } = require('../api/github');
const { appendDateTime } = require('./services');

const handlePush = async event => {
  const repoURL = await getRepositoryUrl(event);
  if (!repoURL) throw new Error('No repository URL');

  const createdAt = event?.['created_at'];
  if (!createdAt) throw new Error('No date');

  const commitHash = event?.payload?.head;
  if (!commitHash) throw new Error('No commit hash');

  const commitUrl = new URL(`${repoURL}/commit/${commitHash}`);

  const repoName = event?.repo?.name;
  if (!repoName) throw new Error('No repository name');

  const message = `Pushed new commit to the branch in repository '${repoName}'
URL: ${commitUrl.href}`;

  return appendDateTime(message, event);
};

module.exports = handlePush;
