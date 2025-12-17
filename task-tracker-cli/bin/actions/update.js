const { readOrCreateDb, writeDb } = require('../db');

const update = async data => {
  let wasUpdated = false;

  const [taskIdAsString, updatedDescription] = data;

  if (!taskIdAsString) {
    console.error('"Task ID is required"');
    return;
  }

  if (!updatedDescription) {
    console.error('Task description is required.');
    return;
  }

  const taskId = Number(taskIdAsString);

  if (Number.isNaN(taskId)) {
    console.error(
      `Got not valid task ID (${taskIdAsString}), expected number.`
    );
    return;
  }

  const db = await readOrCreateDb();

  db.tasks = db.tasks.map(task => {
    if (task.id === taskId) {
      task.description = updatedDescription;
      wasUpdated = true;
    }
    return task;
  });

  if (wasUpdated) {
    await writeDb(db);
    console.log(`Task has been updated successfully (ID: ${taskId}).`);
  } else {
    console.log(`The task (ID=${taskId}) is not found.`);
  }
};

module.exports = update;
