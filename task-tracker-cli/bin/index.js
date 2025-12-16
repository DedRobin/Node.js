#!/usr/bin/env node

const { argv } = require('node:process');

const { ACTION_TYPES, list } = require('./actions');
const add = require('./actions/add');

function main() {
  let action;
  let data = [];

  const args = argv.slice(2);

  // if (args.length >= 3) {
  //   console.error(`Extra erguments, 2 expected, got ${args.length}`);
  // }

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
    default: {
      const actionTypeList = Object.values(ACTION_TYPES);
      const isActionType = actionTypeList.includes(action);
      if (!isActionType) {
        throw new Error(`
The argument '${action}' is not action type. 
Use the following options:
${actionTypeList.join('\n')}`);
      }
    }
  }
}

main();
