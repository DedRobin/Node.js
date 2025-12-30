const { print } = require('./services');

const handlePullRequestReview = event => {
  const reviewer = event?.payload?.review?.user?.login;
  if (!reviewer) throw new Error('No reviewer');

  const url = event?.payload?.review?.['html_url'];
  if (!url) throw new Error('No review URL');

  const message = `Submitted a review for a pull request by ${reviewer}
URL: ${url}`;

  print(message, event);
};

module.exports = handlePullRequestReview;
