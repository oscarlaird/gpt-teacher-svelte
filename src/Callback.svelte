<!-- callback.svelte -->

<script>
import auth0 from 'auth0-js';

const auth0Client = new auth0.WebAuth({
domain: 'dev-mnrtb8s064l7udfk.us.auth0.com',
clientID: 'n0QTo7jIqIIKa7pzNppDvY8Xdfkpgqn5',
redirectUri: `${window.location.origin}`,
responseType: 'token id_token',
scope: 'openid profile',
});

auth0Client.parseHash((err, authResult) => {
if (authResult && authResult.accessToken && authResult.idToken) {
auth0Client.client.userInfo(authResult.accessToken, (err, user) => {
      handleAuthentication();
      window.close();
    });
} else if (err) {
  console.error(err);
}
});
</script>

<h1>

