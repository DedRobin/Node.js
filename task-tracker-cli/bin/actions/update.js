const { readOrCreateDb, writeDb } = require('../db');
const { isValidTaskId, isValidTaskDescription } = require('./services');

const update = async data => {
  let wasUpdated = false;

  const [taskId, description] = data;

  const validTaskDescription = isValidTaskDescription(description);
  const validTaskId = isValidTaskId(taskId);

  const db = await readOrCreateDb();

  db.tasks = db.tasks.map(task => {
    if (task.id === validTaskId) {
      task.description = validTaskDescription;
      wasUpdated = true;
    }
    return task;
  });

  if (wasUpdated) {
    await writeDb(db);
    console.log(`Task has been updated successfully (ID: ${validTaskId}).`);
  } else {
    console.log(`The task (ID=${validTaskId}) is not found.`);
  }
};

module.exports = update;
