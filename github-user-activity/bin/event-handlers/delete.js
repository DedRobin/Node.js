const { print } = require('./services');

const handleDelete = event => {
  const refType = event?.payload?.['ref_type'];
  if (!refType) throw new Error('No ref type');

  const deletedBranch = event?.payload?.ref;
  if (!deletedBranch) throw new Error('No deleted branch');

  const message = `Deleted the ${refType}
Removed branch: ${deletedBranch}`;

  print(message, event);
};

module.exports = handleDelete;
