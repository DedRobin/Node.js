#!/usr/bin/env node

const { argv } = require('node:process');
const { handleEventType } = require('./services');

process.loadEnvFile();

async function main() {
  let username;

  const args = argv.slice(2);

  if (args.length === 0) {
    console.error(`Username is not provided`);
    return;
  }

  username = args[0];

  const token = process.env.PERSONAL_ACCESS_TOKEN;

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events`,
      {
        headers: {
          accept: 'application/vnd.github+json',
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      }
    );
    const events = await response.json();
    // console.log(
    //   data.map(event => `${event.type} (${event['created_at']})`).join('\n')
    // );
    const firstFiveEvents = events.slice(0, 5);

    firstFiveEvents.forEach(event => handleEventType(event));
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

main();
