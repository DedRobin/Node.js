#!/usr/bin/env node

const { argv } = require('node:process');

const { ACTION_TYPES, add, list } = require('./actions');

function main() {
  let action;
  let data = [];

  const args = argv.slice(2);

  if (args.length >= 3) {
    console.error(`Extra erguments, 2 expected, got ${args.length}`);
  }

  args.forEach((arg, index) => {
    const isFirstArg = index === 0;
    const isActionType = Object.values(ACTION_TYPES).includes(arg);

    if (isFirstArg && !isActionType)
      throw new Error(`
  The first argument is not action type. 
Use the following options:
-> add
-> list`);

    if (isFirstArg) action = arg;
    else data.push(arg);
  });

  switch (action) {
    case ACTION_TYPES.ADD: {
      add(data.join(','));
      break;
    }
    case ACTION_TYPES.LIST: {
      list();
    }
    default: {
      break;
    }
  }
}

main();
