const { appendDateTime } = require('./services');

const ISSUE_ACTION_TYPE = {
  opened: 'Opened',
  closed: 'Closed',
  reopened: 'Reopened',
};

const handleIssue = event => {
  const actionType = event?.payload?.action;
  if (!actionType) throw new Error('No issue action type');
  const action = ISSUE_ACTION_TYPE[actionType];

  const url = event?.payload?.issue?.['html_url'];
  if (!url) throw new Error('No issue url');

  const issueOwner = event?.payload?.issue?.user?.login;
  if (!issueOwner) throw new Error('No user who open the issue');

  const repoName = event?.repo?.name;
  if (!repoName) throw new Error('No repository name');

  const message = `${action} the issue by user '${issueOwner}' in repository '${repoName}'
URL: ${url}`;

  return appendDateTime(message, event);
};

module.exports = handleIssue;
