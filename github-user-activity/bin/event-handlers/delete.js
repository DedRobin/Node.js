const { print } = require('./services');

const handleDelete = event => {
  const message = 'Deleted a branch or tag';

  print(message, event);
};

module.exports = handleDelete;
