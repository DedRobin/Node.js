const { getRepositoryUrl } = require('../api/github');
const { appendDateTime } = require('./services');

const handlePull = async event => {
  const url = await getRepositoryUrl(event);
  if (!url) throw new Error('No pull request URL');

  const action = event?.payload?.action;
  if (!action) throw new Error('No pull request action');

  const message = `The pull request is ${action}
URL: ${url}`;

  return appendDateTime(message, event);
};

module.exports = handlePull;
