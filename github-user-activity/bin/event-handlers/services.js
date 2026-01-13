const appendDateTime = (message, event) => {
  const createdAt = event?.['created_at'];
  if (!createdAt) throw new Error('No date');

  return `- ${message}\nDate: ${createdAt}\n`;
};

module.exports = { appendDateTime };
