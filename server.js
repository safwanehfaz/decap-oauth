const express = require('express');
const oauthProvider = require('netlify-cms-oauth-provider-node');

const { ORIGINS, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } = process.env;

if (!ORIGINS || !OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET) {
  console.error("Missing env vars. Required: ORIGINS, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET");
  process.exit(1);
}

const app = express();

// Set up the routes required for the OAuth flow
app.get('/auth', oauthProvider.auth);
app.get('/callback', oauthProvider.callback);
app.get('/success', oauthProvider.success);
app.get('/', oauthProvider.index);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`OAuth server listening on port ${port}`);
});
