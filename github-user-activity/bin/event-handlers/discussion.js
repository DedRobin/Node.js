const { print } = require('./services');

const handleDiscussion = async event => {
  const url = event?.payload?.discussion?.['html_url'];
  if (!url) throw new Error("No discussion's url");

  const message = `Creates the discussion in the repository
URL: ${url}`;

  print(message, event);
};

module.exports = handleDiscussion;
