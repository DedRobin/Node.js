const { readOrCreateDb, writeDb } = require('../db');
const { isValidTaskId } = require('./services');

const deleteTask = async data => {
  let wasDeleted = false;

  const db = await readOrCreateDb();

  const [taskId] = data;

  const validTaskId = isValidTaskId(taskId);

  db.tasks = db.tasks.filter(task => {
    if (task.id === validTaskId) {
      wasDeleted = true;
      return false;
    }

    return true;
  });

  if (wasDeleted) {
    await writeDb(db);
    console.log(`Task has been deleted successfully (ID: ${validTaskId}).`);
  } else {
    console.log(`The task (ID=${validTaskId}) is not found.`);
  }
};

module.exports = deleteTask;
