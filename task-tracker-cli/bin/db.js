const { readFile, writeFile, access, constants } = require('node:fs/promises');

const { stringify } = require('./services');
const { DB_PATH } = require('./config');

const readOrCreateDb = async () => {
  await access(DB_PATH, constants.F_OK);

  const buffer = await readFile(DB_PATH);
  const db = JSON.parse(buffer.toString());

  if (!db?.idCounter) throw new Error("No such property 'idCounter'");

  return db;
};

const writeDb = async db => {
  await writeFile(DB_PATH, stringify(db));
};

module.exports = { readOrCreateDb, writeDb };
