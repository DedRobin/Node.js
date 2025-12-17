const { readOrCreateDb, writeDb } = require('../db');
const { isValidTaskId } = require('./services');

const markTaskInProgress = async data => {
  let wasSetAsInProgress = false;

  const [taskId] = data;
  const validTaskId = isValidTaskId(taskId);

  const db = await readOrCreateDb();

  db.tasks = db.tasks.map(task => {
    if (task.id === validTaskId) {
      task.status = 'in-progress';
      wasSetAsInProgress = true;
    }
    return task;
  });

  if (wasSetAsInProgress) {
    await writeDb(db);
    console.log(
      `Task status has been set 'in-progress' successfully (ID: ${validTaskId}).`
    );
  } else {
    console.log(`The task (ID=${validTaskId}) is not found.`);
  }
};

module.exports = markTaskInProgress;
