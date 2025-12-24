const { print } = require('./services');

const WIKI_ACTION_TYPE = {
  created: 'Creates',
  edited: 'Edites',
};
const handleGollum = event => {
  const pages = event?.payload?.pages;
  if (!pages) throw new Error('No wiki pages');

  const messages = [];

  pages.forEach(page => {
    const pageName = page?.['page_name'];
    if (!pageName) throw new Error('No wiki page name');

    const actionType = page?.action;
    if (!actionType) throw new Error('No wiki page action type');

    var action = WIKI_ACTION_TYPE[actionType];
    if (!actionType) throw new Error('No such wiki action');

    const url = page?.['html_url'];
    if (!url) throw new Error('No wiki page URL');

    const message = `${action} the wiki page '${pageName}'
URL: ${url}`;

    messages.push(message);
  });
  const fullMessage = 'Wiki pages:\n' + messages.join('\n');
  print(fullMessage, event);
};

module.exports = handleGollum;
