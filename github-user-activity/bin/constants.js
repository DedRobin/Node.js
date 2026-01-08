const EVENT_TYPE = {
  COMMITCOMMENT: 'CommitCommentEvent',
  CREATE: 'CreateEvent',
  DELETE: 'DeleteEvent',
  DISCUSSION: 'DiscussionEvent',
  FORK: 'ForkEvent',
  GOLLUM: 'GollumEvent',
  ISSUECOMMENT: 'IssueCommentEvent',
  ISSUES: 'IssuesEvent',
  MEMBER: 'MemberEvent',
  PUBLIC: 'PublicEvent',
  PULL: 'PullRequestEvent',
  PULLREQUESTREVIEW: 'PullRequestReviewEvent',
  PULLREQUESTREVIEWCOMMENT: 'PullRequestReviewCommentEvent',
  PULLREQUESTREVIEWTHREAD: 'PullRequestReviewThreadEvent',
  PUSH: 'PushEvent',
  RELEASE: 'ReleaseEvent',
  WATCH: 'WatchEvent',
};

module.exports = { EVENT_TYPE };
