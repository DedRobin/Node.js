const { readOrCreateDb, writeDb } = require('../db');
const { isValidTaskId } = require('./services');

const markTaskIsDone = async data => {
  let wasSetAsDone = false;

  const [taskId] = data;
  const validTaskId = isValidTaskId(taskId);

  const db = await readOrCreateDb();

  db.tasks = db.tasks.map(task => {
    if (task.id === validTaskId) {
      task.status = 'done';
      wasSetAsDone = true;
    }
    return task;
  });

  if (wasSetAsDone) {
    await writeDb(db);
    console.log(
      `Task status has been set 'done' successfully (ID: ${validTaskId}).`
    );
  } else {
    console.log(`The task (ID=${validTaskId}) is not found.`);
  }
};

module.exports = markTaskIsDone;
