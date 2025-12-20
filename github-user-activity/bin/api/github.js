const cachedGetRepositoryUrl = () => {
  let cachedUsername;
  let cachedRepoUrl;

  return async event => {
    const username = event?.actor?.login;
    if (!username) throw new Error('No username');

    if (cachedRepoUrl && username === cachedUsername) {
      return cachedRepoUrl;
    }

    const apiUrl = event?.repo?.url;
    if (!apiUrl) throw new Error('No GitHubAPI URL');

    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const response = await fetch(apiUrl, { headers });
      const data = await response.json();

      const repoUrl = data?.['html_url'];
      if (!repoUrl) throw new Error('No such property "html_url"');

      cachedRepoUrl = repoUrl;
      cachedUsername = username;

      return repoUrl;
    } catch (err) {
      console.error(`Fetch error`, err?.message || 'No error message');
    }
  };
};

module.exports = { getRepositoryUrl: cachedGetRepositoryUrl() };
