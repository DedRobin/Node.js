const { getRepositoryUrl } = require('../api/github');
const { appendDateTime } = require('./services');

const handlePublic = event => {
  const repoUrl = getRepositoryUrl(event);
  if (!repoUrl) throw new Error('No repository URL');

  const repoName = event?.repo?.name;
  if (!repoName) throw new Error('No repository name');

  const message = `Made the private repository '${repoName}' public
URL: ${repoUrl}`;

  return appendDateTime(message, event);
};

module.exports = handlePublic;
