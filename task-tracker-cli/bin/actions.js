const { readOrCreateDb } = require('./db');

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

const list = async data => {
  // const taskStatusList = Object.values(TASK_STATUS);
  const taskStatus = data.at(0);

  const db = await readOrCreateDb();

  const { tasks } = db;

  const filteredTasks = tasks.filter(task => (taskStatus ? task.status === taskStatus : true));

  filteredTasks.forEach(({ id, description, status, createdAt, updatedAt }) => {
    console.log(`${id}) ${[description, status, createdAt, updatedAt].join(' | ')}`);
  });
};

module.exports = { ACTION_TYPES, TASK_STATUS, list };
