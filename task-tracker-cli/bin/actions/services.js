const isValidTaskId = taskId => {
  const validTaskId = Number(taskId);

  if (!taskId) {
    throw new Error('"Task ID is required"');
  }

  if (Number.isNaN(validTaskId)) {
    throw new Error(`Got not valid task ID (${taskId}), expected number.`);
  }

  return validTaskId;
};

const isValidTaskDescription = description => {
  if (!description) {
    throw new Error('Task description is required.');
  }

  return description;
};

module.exports = { isValidTaskId, isValidTaskDescription };
