const { EVENT_TYPE } = require('./constants');
const handleCommitComment = require('./event-handlers/commitComment');
const handleCreate = require('./event-handlers/create');
const handleDelete = require('./event-handlers/delete');
const handleDiscussion = require('./event-handlers/discussion');
const handleFork = require('./event-handlers/fork');
const handleGollum = require('./event-handlers/gollum');
const handleIssue = require('./event-handlers/issue');
const handleIssueComment = require('./event-handlers/issueComment');
const handleMember = require('./event-handlers/member');
const handlePublic = require('./event-handlers/public');
const handlePull = require('./event-handlers/pull');
const handlePullRequestReview = require('./event-handlers/pullRequestReview');
const handlePullRequestViewComment = require('./event-handlers/pullRequestViewComment');
const handlePush = require('./event-handlers/push');

const handleEventType = async event => {
  switch (event.type) {
    case EVENT_TYPE.COMMITCOMMENT: {
      return handleCommitComment(event);
    }
    case EVENT_TYPE.CREATE: {
      return await handleCreate(event);
    }
    case EVENT_TYPE.DELETE: {
      return handleDelete(event);
    }
    case EVENT_TYPE.DISCUSSION: {
      return await handleDiscussion(event);
    }
    case EVENT_TYPE.FORK: {
      return handleFork(event);
    }
    case EVENT_TYPE.GOLLUM: {
      return handleGollum(event);
    }
    case EVENT_TYPE.ISSUECOMMENT: {
      return handleIssueComment(event);
    }
    case EVENT_TYPE.ISSUES: {
      return handleIssue(event);
    }
    case EVENT_TYPE.MEMBER: {
      return handleMember(event);
    }
    case EVENT_TYPE.PUBLIC: {
      return await handlePublic(event);
    }
    case EVENT_TYPE.PULL: {
      return await handlePull(event);
    }
    case EVENT_TYPE.PULLREQUESTREVIEW: {
      return handlePullRequestReview(event);
    }
    case EVENT_TYPE.PULLREQUESTREVIEWCOMMENT: {
      return handlePullRequestViewComment(event);
    }
    case EVENT_TYPE.PUSH: {
      return await handlePush(event);
    }
    case EVENT_TYPE.RELEASE: {
      return 'Published a new release';
    }
    case EVENT_TYPE.WATCH: {
      return 'Starred a repository';
    }
    default: {
      return 'Performed an unknown action';
    }
  }
};

module.exports = { handleEventType };
