<script>
  import { onMount, onDestroy } from 'svelte';
  import { auth } from './firebase';
  import * as firebaseui from 'firebaseui';
  import 'firebaseui/dist/firebaseui.css';

  let ui;

  onMount(() => {
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          if (authResult.additionalUserInfo.isNewUser && authResult.user.isAnonymous) {
            // Save the anonymous user's data (if needed) before upgrading the account
          }
          return true;
        },
      },
    };

    ui = new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', uiConfig);
  });

  onDestroy(() => {
    ui.delete();
  });
</script>

<div id="firebaseui-auth-container"></div>

