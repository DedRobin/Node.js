const { EVENT_TYPE } = require('./constants');
const handlePush = require('./event-handlers/push');

const handleEventType = event => {
  switch (event.type) {
    case EVENT_TYPE.COMMITCOMMENT: {
      console.log('Commented on a commit');
      break;
    }
    case EVENT_TYPE.CREATE: {
      console.log('Created a new repository, branch, or tag');
      break;
    }
    case EVENT_TYPE.DELETE: {
      console.log('Deleted a branch or tag');
      break;
    }
    case EVENT_TYPE.FORK: {
      console.log('Forked a repository');
      break;
    }
    case EVENT_TYPE.GOLLUM: {
      console.log('Updated a wiki page');
      break;
    }
    case EVENT_TYPE.ISSUECOMMENT: {
      console.log('Posted a comment on an issue');
      break;
    }
    case EVENT_TYPE.ISSUES: {
      console.log('Opened, closed, or managed an issue');
      break;
    }
    case EVENT_TYPE.MEMBER: {
      console.log('Updated collaborator access for a repository');
      break;
    }
    case EVENT_TYPE.PUBLISH: {
      console.log('Made a private repository public');
      break;
    }
    case EVENT_TYPE.PULL: {
      console.log('Opened or updated a pull request');
      break;
    }
    case EVENT_TYPE.PULLREQUESTREVIEW: {
      console.log('Submitted a review for a pull request');
      break;
    }
    case EVENT_TYPE.PULLREQUESTREVIEWCOMMENT: {
      console.log("Commented on a pull request's diff");
      break;
    }
    case EVENT_TYPE.PULLREQUESTREVIEWTHREAD: {
      console.log('Resolved or reopened a review thread');
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
