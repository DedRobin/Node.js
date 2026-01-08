const { appendDateTime } = require('./services');

const handleDiscussion = async event => {
  const url = event?.payload?.discussion?.['html_url'];
  if (!url) throw new Error("No discussion's url");

  const discussionOwner = event?.payload?.discussion?.user?.login;
  if (!discussionOwner) throw new Error('No user who open discussion');

  const repoName = event?.repo?.name;
  if (!repoName) throw new Error('No repository name');

  const message = `Creates the discussion in the repository '${repoName}'
URL: ${url}`;

  return appendDateTime(message, event);
};

module.exports = handleDiscussion;
