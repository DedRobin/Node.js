const { print } = require('./services');

const handleFork = event => {
  const message = 'Forked a repository';
  print(message, event);
};

module.exports = handleFork;
