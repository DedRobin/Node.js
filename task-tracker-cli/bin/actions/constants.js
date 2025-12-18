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

module.exports = { ACTION_TYPES, TASK_STATUS };
