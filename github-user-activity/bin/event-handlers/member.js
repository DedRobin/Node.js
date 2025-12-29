const { print } = require('./services');

const handleMember = event => {
  const collaborator = event?.payload?.member?.login;
  if (!collaborator) throw new Error('No member');

  const message = `The collaborator ${collaborator} access for a repository`;

  print(message, event);
};

module.exports = handleMember;
