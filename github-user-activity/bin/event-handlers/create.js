const handleCreate = event => {
  const origin = 'https://github.com/';

  const createdAt = event?.['created_at'];
  if (!createdAt) throw new Error('No date');

  const repoName = event?.repo?.name;
  if (!repoName) throw new Error('No repository name');

  const refType = event?.payload?.['ref_type'];
  if (!refType) throw new Error('No reference type');

  const branch = event?.payload?.ref;
  if (!branch) throw new Error('No branch');

  const branchUrl = new URL(`${repoName}/tree/${branch}`, origin);

  console.log(`
Date: ${createdAt} - Created a new ${refType}
URL: ${branchUrl.href}
`);
};

module.exports = handleCreate;
