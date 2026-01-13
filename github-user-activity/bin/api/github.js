const getRepositoryUrl = event => {
  const githubDomain = 'https://github.com';

  const repoName = event?.repo?.name;
  if (!repoName) throw new Error('No repository name');

  return `${githubDomain}/${repoName}`;
};

module.exports = { getRepositoryUrl };
