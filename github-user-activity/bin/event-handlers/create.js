const { getRepositoryUrl } = require('../api/github');
const { print } = require('./services');

const handleCreate = async event => {
  const repoURL = await getRepositoryUrl(event);
  if (!repoURL) throw new getRepositoryUrl('No repository URL');

  const refType = event?.payload?.['ref_type'];
  if (!refType) throw new Error('No reference type');

  const branch = event?.payload?.ref;
  if (!branch) throw new Error('No branch');

  const branchUrl = new URL(`${repoURL}/tree/${branch}`);

  const message = `Created a new ${refType}
Branch URL: ${branchUrl.href}`;

  print(message, event);
};

module.exports = handleCreate;
