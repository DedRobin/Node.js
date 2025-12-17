const { readOrCreateDb, writeDb } = require('../db');

const deleteTask = async data => {
  let wasDeleted = false;

  const db = await readOrCreateDb();

  const [taskIdAsString] = data;

  if (!taskIdAsString) {
    console.error('Task ID is required.');
    return;
  }

  const taskId = Number(taskIdAsString);

  if (Number.isNaN(taskId)) {
    console.error(
      `Got not valid task ID (${taskIdAsString}), expected number.`
    );
    return;
  }

  db.tasks = db.tasks.filter(task => {
    if (task.id === taskId) {
      wasDeleted = true;
      return false;
    }

    return true;
  });

  if (wasDeleted) {
    await writeDb(db);
    console.log(`Task has been deleted successfully (ID: ${taskId}).`);
  } else {
    console.log(`The task (ID=${taskId}) is not found.`);
  }
};

module.exports = deleteTask;
