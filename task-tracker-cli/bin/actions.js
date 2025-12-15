const { readFile, writeFile, access, constants } = require('node:fs/promises');

const { stringify, getDatetime } = require('./services');
const { DB_PATH } = require('./config');

const ACTION_TYPES = {
  ADD: 'add',
  UPDATE: 'update',
  DELETE: 'delete',
  LIST: 'list',
  MARK_IN_PROGRESS: 'mark-in-progress',
  MARK_DONE: 'mark-done',
};

const TASK_STATUS = {
  TODO: 'todo',
  IN_PROGRESS: 'in-progress',
  DONE: 'done',
};

const readOrCreateDb = async () => {
  await access(DB_PATH, constants.F_OK);

  const jsonFile = await readFile(DB_PATH);
  const db = JSON.parse(jsonFile);

  if (!db?.idCounter) throw new Error("No such property 'idCounter'");

  return db;
};

const writeDb = async (db) => {
  await writeFile(DB_PATH, stringify(db));
};

const add = async (task) => {
  if (!task) throw new Error("'task' variable has been missed");
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

      await writeFile(filePath, stringify(initDb));
    } else if (failToParseJsonDb)
      console.error(`Fail to parse the "${fileName}":\n`, err);
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

const list = async () => {
  const db = await readOrCreateDb();

  const { tasks } = db;

  tasks.forEach(({ id, description, status, createdAt, updatedAt }) => {
    console.log(
      `${id}) ${[description, status, createdAt, updatedAt].join(' | ')}`
    );
  });
};

module.exports = { ACTION_TYPES, add, list };
