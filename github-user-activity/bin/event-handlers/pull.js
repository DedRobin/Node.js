const { print } = require('./services');

const handlePull = event => {
  const message = 'Opened or updated a pull request';

  print(message, event);
};

module.exports = handlePull;
