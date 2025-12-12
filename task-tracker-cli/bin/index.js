#!/usr/bin/env node

const { argv } = require('node:process');

const { ACTION_TYPES, add } = require('./actions');

function main() {
  let action;

  const args = argv.slice(2);

  if (args.length >= 3) {
    console.error(`Extra erguments, 2 expected, got ${args.length}`);
  }

  args.forEach((arg, index) => {
    const isFirstArg = index === 0 && ACTION_TYPES.includes(arg);

    if (isFirstArg) {
      action = arg;
      return;
    }

    switch (action) {
      case 'add': {
        add(arg);
        break;
      }
      default: {
        break;
      }
    }
  });
}

main();
