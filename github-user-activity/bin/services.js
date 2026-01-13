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

const getUsernameRepositoryUrl = username =>
  new URL(`https://api.github.com/users/${username}/events`);

const fetchUserEvents = async (username, queryParams) => {
  const token = process.env.GH_PERSONAL_ACCESS_TOKEN;
  let url = getUsernameRepositoryUrl(username);

  queryParams.slice(1).forEach(param => {
    const [key, value] = param.split('=');
    switch (key) {
      case 'page': {
        url.searchParams.set('page', value);
        break;
      }
      case 'per_page': {
        url.searchParams.set('per_page', value);
        break;
      }
      default:
        break;
    }
  });

  try {
    const response = await fetch(url, {
      headers: {
        accept: 'application/vnd.github+json',
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

const handleEventType = event => {
  switch (event.type) {
    case EVENT_TYPE.COMMITCOMMENT: {
      return handleCommitComment(event);
    }
    case EVENT_TYPE.CREATE: {
      return handleCreate(event);
    }
    case EVENT_TYPE.DELETE: {
      return handleDelete(event);
    }
    case EVENT_TYPE.DISCUSSION: {
      return handleDiscussion(event);
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
      return handlePublic(event);
    }
    case EVENT_TYPE.PULL: {
      return handlePull(event);
    }
    case EVENT_TYPE.PULLREQUESTREVIEW: {
      return handlePullRequestReview(event);
    }
    case EVENT_TYPE.PULLREQUESTREVIEWCOMMENT: {
      return handlePullRequestViewComment(event);
    }
    case EVENT_TYPE.PUSH: {
      return handlePush(event);
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

module.exports = {
  handleEventType,
  getUsernameRepositoryUrl,
  fetchUserEvents,
};
