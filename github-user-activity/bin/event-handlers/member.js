const { print } = require('./services');

const handleMember = event => {
  const message = 'Updated collaborator access for a repository';

  print(message, event);
};

module.exports = handleMember;
