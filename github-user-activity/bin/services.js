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
const handlePublish = require('./event-handlers/publish');
const handlePull = require('./event-handlers/pull');
const handlePullRequestView = require('./event-handlers/pullRequestView');
const handlePullRequestViewComment = require('./event-handlers/pullRequestViewComment');
const handlePullRequestViewThread = require('./event-handlers/pullRequestViewThread');
const handlePush = require('./event-handlers/push');

const handleEventType = event => {
  switch (event.type) {
    case EVENT_TYPE.COMMITCOMMENT: {
      handleCommitComment(event);
      break;
    }
    case EVENT_TYPE.CREATE: {
      handleCreate(event);
      break;
    }
    case EVENT_TYPE.DELETE: {
      handleDelete(event);
      break;
    }
    case EVENT_TYPE.DISCUSSION: {
      handleDiscussion(event);
      break;
    }
    case EVENT_TYPE.FORK: {
      handleFork(event);
      break;
    }
    case EVENT_TYPE.GOLLUM: {
      handleGollum;
      break;
    }
    case EVENT_TYPE.ISSUECOMMENT: {
      handleIssueComment(event);
      break;
    }
    case EVENT_TYPE.ISSUES: {
      handleIssue(event);
      break;
    }
    case EVENT_TYPE.MEMBER: {
      handleMember(event);
      break;
    }
    case EVENT_TYPE.PUBLISH: {
      handlePublish(event);
      break;
    }
    case EVENT_TYPE.PULL: {
      handlePull(event);
      break;
    }
    case EVENT_TYPE.PULLREQUESTREVIEW: {
      handlePullRequestView(event);
      break;
    }
    case EVENT_TYPE.PULLREQUESTREVIEWCOMMENT: {
      handlePullRequestViewComment(event);
      break;
    }
    case EVENT_TYPE.PULLREQUESTREVIEWTHREAD: {
      handlePullRequestViewThread(event);
      break;
    }
    case EVENT_TYPE.PUSH: {
      handlePush(event);
      break;
    }
    case EVENT_TYPE.RELEASE: {
      console.log('Published a new release');
      break;
    }
    case EVENT_TYPE.SPONSORSHIP: {
      console.log('Engaged in sponsorship activity');
      break;
    }
    case EVENT_TYPE.WATCH: {
      console.log('Starred a repository');
      break;
    }
    default: {
      console.log('Performed an unknown action');
      break;
    }
  }
};

module.exports = { handleEventType };
