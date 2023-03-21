<script>
  import auth0 from 'auth0-js';

  const auth0Client = new auth0.WebAuth({
    domain: 'dev-mnrtb8s064l7udfk.us.auth0.com',
    clientID: 'n0QTo7jIqIIKa7pzNppDvY8Xdfkpgqn5',
    redirectUri: `${window.location.origin}`,
    responseType: 'token id_token',
    scope: 'openid profile',
  });

  let isAuthenticated = false;
  let userProfile = null;

  function login() {
    auth0Client.authorize({
      redirectUri: `${window.location.origin}`,
    });
  }

  function logout() {
    auth0Client.logout({
      returnTo: `${window.location.origin}`,
    });
    isAuthenticated = false;
    userProfile = null;
  }

  function handleAuthentication() {
    auth0Client.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        auth0Client.client.userInfo(authResult.accessToken, (err, user) => {
          isAuthenticated = true;
          userProfile = user;
        });
      } else if (err) {
        console.error(err);
      }
    });
  }

  if (window.location.hash && !isAuthenticated) {
    handleAuthentication();
  }

  export { isAuthenticated, userProfile, login, logout };
</script>

{#if isAuthenticated}
  <button on:click={logout}>{userProfile.name} | Logout</button>
{:else}
  <button on:click={login}>Sign In</button>
{/if}
