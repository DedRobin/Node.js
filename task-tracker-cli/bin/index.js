#!/usr/bin/env node

const { argv } = require('node:process');

const { ACTION_TYPES } = require('./actions/constants');
const add = require('./actions/add');
const list = require('./actions/list');
const update = require('./actions/update');
const deleteTask = require('./actions/delete');
const markTaskInProgress = require('./actions/markInProgress');
const markTaskIsDone = require('./actions/markIsDone');

function main() {
  let action;
  let data = [];

  const args = argv.slice(2);

  args.forEach((arg, index) => {
    const isFirstArg = index === 0;

    if (isFirstArg) action = arg;
    else data.push(arg);
  });

  switch (action) {
    case ACTION_TYPES.ADD: {
      add(data);
      break;
    }
    case ACTION_TYPES.LIST: {
      list(data);
      break;
    }
    case ACTION_TYPES.UPDATE: {
      update(data);
      break;
    }
    case ACTION_TYPES.DELETE: {
      deleteTask(data);
      break;
    }
    case ACTION_TYPES.MARK_IN_PROGRESS: {
      markTaskInProgress(data);
      break;
    }
    case ACTION_TYPES.MARK_DONE: {
      markTaskIsDone(data);
      break;
    }
    default: {
      const actionTypeList = Object.values(ACTION_TYPES);
      const isActionType = actionTypeList.includes(action);

      if (!isActionType) {
        const formattedActionTypeList = actionTypeList
          .map(actionType => '- ' + actionType)
          .join('\n');

        console.error(`
The argument '${action}' is not action type. 
Use the following options:
${formattedActionTypeList}`);
      }
    }
  }
}

main();
