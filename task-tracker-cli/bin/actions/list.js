const { readOrCreateDb } = require('../db');

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

module.exports = list;
