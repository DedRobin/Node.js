const { print } = require('./services');

const handleGollum = event => {
  const message = 'Updated a wiki page';

  print(message, event);
};

module.exports = handleGollum;
