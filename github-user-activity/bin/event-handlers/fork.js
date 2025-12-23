const { print } = require('./services');

const handleFork = event => {
  const forkedRepoUrl = event?.payload?.forkee?.['clone_url'];
  if (!forkedRepoUrl) throw new Error('No forked repository');
  const forkedRepoName = event?.payload?.forkee?.['full_name'];
  if (!forkedRepoName) throw new Error('No forked repository');

  const message = `Forked a repository '${forkedRepoName}'
URL: ${forkedRepoUrl}`;
  print(message, event);
};

module.exports = handleFork;
