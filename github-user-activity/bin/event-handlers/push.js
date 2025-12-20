const { getRepositoryUrl } = require('../api/github');

const handlePush = async event => {
  const repoURL = await getRepositoryUrl(event);
  if (!repoURL) throw new Error('No repository URL');

  const createdAt = event?.['created_at'];
  if (!createdAt) throw new Error('No date');

  const repositoryName = event?.repo?.name;
  if (!repositoryName) throw new Error('No repository name');

  const commitHash = event?.payload?.head;
  if (!commitHash) throw new Error('No commit hash');

  const commitUrl = new URL(`${repoURL}/commit/${commitHash}`);

  console.log(`
Date: ${createdAt} - Pushed new commit to a branch:
Commit URL: ${commitUrl.href}`);
};

module.exports = handlePush;
