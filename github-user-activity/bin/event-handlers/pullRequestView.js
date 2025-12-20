const { print } = require('./services');

const handlePullRequestView = event => {
  const message = 'Submitted a review for a pull request';

  print(message, event);
};

module.exports = handlePullRequestView;
