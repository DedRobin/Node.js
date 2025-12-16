const { writeFile } = require('node:fs/promises');

const { TASK_STATUS } = require('./constants');
const { readOrCreateDb, writeDb } = require('../db');
const { getDatetime, stringify } = require('../services');
const { DB_PATH } = require('../config');

const add = async (data = []) => {
  if (!data.length) throw new Error('Data is empty');

  const task = data.join(' ');
  const datetime = getDatetime();

  try {
    const db = await readOrCreateDb();

    db.idCounter++;
    const taskId = db.idCounter;

    db.tasks.push({
      id: taskId,
      description: task,
      status: TASK_STATUS.TODO,
      createdAt: datetime,
      updatedAt: datetime,
    });

    await writeDb(db);

    console.log(`Task "${task}" added successfully (ID: ${db.idCounter})`);
  } catch (err) {
    const noSuchFileOrDir = err.code === 'ENOENT';
    const failToParseJsonDb = 'SyntaxError';

    if (noSuchFileOrDir) {
      const initDb = {
        idCounter: 1,
        tasks: [
          {
            id: 1,
            description: task,
            status: TASK_STATUS.TODO,
            createdAt: datetime,
            updatedAt: datetime,
          },
        ],
      };

      await writeFile(DB_PATH, stringify(initDb));
    } else if (failToParseJsonDb) console.error(`Fail to parse the "${DB_PATH}":\n`, err);
    else {
      console.error(
        `Something went wrong
      action=add
      value=${task}
            `,
        err
      );
    }
  }
};

module.exports = add;
