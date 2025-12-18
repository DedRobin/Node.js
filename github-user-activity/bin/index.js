#!/usr/bin/env node

const { argv } = require('node:process');

async function main() {
  let username;

  const args = argv.slice(2);

  if (args.length === 0) {
    console.error(`Username is not provided`);
    return;
  }

  username = args[0];
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/events`,
      { headers: { accept: 'application/vnd.github+json' } }
    );
    const data = await response.json();
    // console.log(
    //   data.map(event => `${event.type} (${event['created_at']})`).join('\n')
    // );
    console.log(data[0]);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

main();
