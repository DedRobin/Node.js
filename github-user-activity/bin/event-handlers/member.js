const { appendDateTime } = require('./services');

const handleMember = event => {
  const collaborator = event?.payload?.member?.login;
  if (!collaborator) throw new Error('No member');

  const message = `The collaborator ${collaborator} access for a repository`;

  return appendDateTime(message, event);
};

module.exports = handleMember;
