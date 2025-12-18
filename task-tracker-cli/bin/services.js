const stringify = data => JSON.stringify(data, null, 2);

const getDatetime = () => {
  const date = new Date();

  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const datetime = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;

  return datetime;
};

module.exports = { stringify, getDatetime };
