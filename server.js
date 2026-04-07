const OAuthProvider = require('netlify-cms-oauth-provider-node');

const {
  ORIGINS,
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  REDIRECT_URL,
  PORT
} = process.env;

if (!ORIGINS || !OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET || !REDIRECT_URL) {
  console.error(
    "Missing env vars. Required: ORIGINS, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, REDIRECT_URL"
  );
  process.exit(1);
}

const server = new OAuthProvider({
  providers: {
    github: {
      clientId: OAUTH_CLIENT_ID,
      clientSecret: OAUTH_CLIENT_SECRET,
    },
  },
}).server;

server.listen(PORT || 3000, () => {
  console.log("OAuth server listening");
});
