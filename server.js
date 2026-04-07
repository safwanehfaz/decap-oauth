const server = new OAuthProvider({
  providers: {
    github: {
      clientId: OAUTH_CLIENT_ID,
      clientSecret: OAUTH_CLIENT_SECRET,
    },
  },
}).server;
