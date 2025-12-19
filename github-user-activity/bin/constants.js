const EVENT_TYPE = {
  COMMITCOMMENT: 'CommitCommentEvent',
  CREATE: 'CreateEvent',
  DELETE: 'DeleteEvent',
  FORK: 'ForkEvent',
  GOLLUM: 'GollumEvent',
  ISSUECOMMENT: 'IssueCommentEvent',
  ISSUES: 'IssuesEvent',
  MEMBER: 'MemberEvent',
  PUBLISH: 'PublishEvent',
  PULL: 'PullRequestEvent',
  PULLREQUESTREVIEW: 'PullRequestReviewEvent',
  PULLREQUESTREVIEWCOMMENT: 'PullRequestReviewCommentEvent',
  PULLREQUESTREVIEWTHREAD: 'PullRequestReviewThreadEvent',
  PUSH: 'PushEvent',
  RELEASE: 'ReleaseEvent',
  SPONSORSHIP: 'SponsorshipEvent',
  WATCH: 'WatchEvent',
};

module.exports = { EVENT_TYPE };
