#!/usr/bin/env node

const { argv } = require('node:process');
const { handleEventType, fetchUserEvents } = require('./services');

process.loadEnvFile();

async function main() {
  const args = argv.slice(2);
  const username = args.at(0);

  if (!username) {
    console.error(`Username is not provided`);
    return;
  }

  const queryParams = args.slice(1);

  const events = await fetchUserEvents(username, queryParams);
  const messages = events.map(event => handleEventType(event));

  messages.forEach(message => console.log(message));
}

main();
