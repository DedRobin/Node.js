const { getRepositoryUrl } = require('../api/github');

const handleCreate = async event => {
  const repoURL = await getRepositoryUrl(event);
  if (!repoURL) throw new getRepositoryUrl('No repository URL');

  const createdAt = event?.['created_at'];
  if (!createdAt) throw new Error('No date');

  const refType = event?.payload?.['ref_type'];
  if (!refType) throw new Error('No reference type');

  const branch = event?.payload?.ref;
  if (!branch) throw new Error('No branch');

  const branchUrl = new URL(`${repoURL}/tree/${branch}`);

  console.log(`
Date: ${createdAt} - Created a new ${refType}
URL: ${branchUrl.href}`);
};

module.exports = handleCreate;
