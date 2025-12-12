const { readFile, writeFile, access, constants } = require('node:fs/promises');
const { stringify } = require('./services');
const path = require('node:path');

const ACTION_TYPES = [
  'add',
  'update',
  'delete',
  'list',
  'mark-in-progress',
  'mark-done',
];

const add = async (task) => {
  const fileName = 'db.json';
  const filePath = path.resolve('./', fileName);

  try {
    await access(filePath, constants.F_OK);

    const jsonFile = await readFile(filePath);

    const db = JSON.parse(jsonFile);

    if (!db?.idCounter) throw new Error("No such property 'idCounter'");

    db.idCounter++;
    const taskId = db.idCounter;

    db.tasks[taskId] = task;

    await writeFile(filePath, stringify(db));

    console.log(`Task "${task}" added successfully (ID: ${db.idCounter})`);
  } catch (err) {
    const noSuchFileOrDir = err.code === 'ENOENT';
    const failToParseJsonDb = 'SyntaxError';

    if (noSuchFileOrDir) {
      const initDb = {
        idCounter: 1,
        tasks: {
          1: task,
        },
      };

      await writeFile(filePath, stringify(initDb));
    } else if (failToParseJsonDb)
      console.error(`Fail to parse the "${fileName}":\n`, err);
    else
      console.error(
        `Something went wrong
action=add
value=${task}
      `,
        err
      );
  }
};

module.exports = { ACTION_TYPES, add };
