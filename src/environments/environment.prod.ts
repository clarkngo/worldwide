export const environment = {
  production: true,
  auth: {
    clientID: 'TkTk5MWdjG16PrYKzBH4Ot6CWvkClAe7',
    domain: 'worldwideamerican.auth0.com', // e.g., you.auth0.com
    audience: '', // e.g., http://localhost:3001
    redirect: 'http://www.worldwideamerican.net/callback',
    scope: 'openid profile email',
    returnTo: 'http://www.worldwideamerican.net/'
  }
};
