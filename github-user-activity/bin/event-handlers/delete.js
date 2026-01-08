const { appendDateTime } = require('./services');

const handleDelete = event => {
  const refType = event?.payload?.['ref_type'];
  if (!refType) throw new Error('No ref type');

  const deletedBranch = event?.payload?.ref;
  if (!deletedBranch) throw new Error('No deleted branch');

  const repoName = event?.repo?.name;
  if (!repoName) throw new Error('No repository name');

  const message = `Deleted the ${refType} '${deletedBranch}' from the repository '${repoName}'`;

  return appendDateTime(message, event);
};

module.exports = handleDelete;
