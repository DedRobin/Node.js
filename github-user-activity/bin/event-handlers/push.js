const handlePush = event => {
  const origin = 'https://github.com/';

  const createdAt = event?.['created_at'];
  if (!createdAt) throw new Error('No date');

  const repositoryName = event?.repo?.name;
  if (!repositoryName) throw new Error('No repository name');

  const commitHash = event?.payload?.head;
  if (!commitHash) throw new Error('No commit hash');

  const commitUrl = new URL(`${repositoryName}/commit/${commitHash}`, origin);

  console.log(`
Date: ${createdAt} - Pushed new commits to a branch:
Commit URL: ${commitUrl.href}
        `);
};

module.exports = handlePush;
