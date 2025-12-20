const { print } = require('./services');

const handlePublish = event => {
  const message = 'Made a private repository public';

  print(message, event);
};

module.exports = handlePublish;
