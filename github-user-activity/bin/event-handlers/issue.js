const { print } = require('./services');

const ISSUE_ACTION_TYPE = {
  opened: 'Opened',
  closed: 'Closed',
  reopened: 'Reopened',
};

const handleIssue = event => {
  const actionType = event?.payload?.action;
  if (!actionType) throw new Error('No issue action type');
  const action = ISSUE_ACTION_TYPE[actionType];

  const title = event?.payload?.issue?.title;
  if (!title) throw new Error('No issue title');

  const description = event?.payload?.issue?.body;
  if (!description) throw new Error('No issue body');

  const url = event?.payload?.issue?.['html_url'];
  if (!url) throw new Error('No issue url');

  const message = `${action} the issue
Title: ${title}
Description: ${description}
URL: ${url}`;

  print(message, event);
};

module.exports = handleIssue;
