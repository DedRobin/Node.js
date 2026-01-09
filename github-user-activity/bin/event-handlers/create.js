const { getRepositoryUrl } = require('../api/github');
const { appendDateTime } = require('./services');

const handleCreate = event => {
  const repoURL = getRepositoryUrl(event);
  if (!repoURL) throw new Error('No repository URL');

  const refType = event?.payload?.['ref_type'];
  if (!refType) throw new Error('No reference type');

  const branch = event?.payload?.ref;
  if (!branch) throw new Error('No branch');

  const branchUrl = new URL(`${repoURL}/tree/${branch}`);

  const repoName = event?.repo?.name;
  if (!repoName) throw new Error('No repository name');

  const message = `Created a new ${refType} in repository '${repoName}'
URL: ${branchUrl.href}`;

  return appendDateTime(message, event);
};

module.exports = handleCreate;
