const OAuthProvider = require('netlify-cms-oauth-provider-node');

const { ORIGIN, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } = process.env;

if (!ORIGIN || !OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET) {
  console.error("Missing env vars. Required: ORIGIN, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET");
  process.exit(1);
}

const server = new OAuthProvider({
  // This enables GitHub OAuth for Decap/Netlify CMS
  providers: {
    github: {
      clientId: OAUTH_CLIENT_ID,
      clientSecret: OAUTH_CLIENT_SECRET,
      // optional, usually not needed:
      // redirectUri: `${ORIGIN}/admin/`
    }
  }
}).server;

server.listen(process.env.PORT || 3000, () => {
  console.log("OAuth server listening");
});
