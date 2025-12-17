const { readOrCreateDb, writeDb } = require('../db');

const update = async data => {
  let wasUpdated = false;

  const [taskIdAsString, updatedDescription] = data;

  if (!taskIdAsString) {
    console.error('"Task ID is missed"');
    return;
  }

  if (!updatedDescription) {
    console.error('"Task description is missed"');
    return;
  }

  const taskId = Number(taskIdAsString);

  if (Number.isNaN(taskId)) {
    console.log(`Got not valid task ID (${taskIdAsString}), expected number`);
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

  if (!wasUpdated) {
    console.log(`There is no task with ID (${taskId})`);
    return;
  }

  await writeDb(db);
};

module.exports = update;
