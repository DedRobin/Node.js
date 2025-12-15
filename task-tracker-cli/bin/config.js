const path = require('node:path');

const dbFilename = 'db.json';

const DB_PATH = path.resolve('./', dbFilename);

module.exports = { DB_PATH };
