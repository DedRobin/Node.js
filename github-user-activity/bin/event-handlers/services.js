const print = (message, event) => {
  const createdAt = event?.['created_at'];
  if (!createdAt) throw new Error('No date');

  console.log(`- ${message}\nDate: ${createdAt}\n`);
};

module.exports = { print };
