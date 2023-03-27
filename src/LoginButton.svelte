<!-- src/components/LoginButton.svelte -->
<script>
  import { onMount, onDestroy } from "svelte";
  import { auth } from "./firebase.js"
  import * as firebaseui from "firebaseui";
  import "firebaseui/dist/firebaseui.css";

  let user = null;
  let uiInstance;

  const unsubscribe = auth.onAuthStateChanged((u) => {
    user = u;
  });

  onMount(() => {
    uiInstance = new firebaseui.auth.AuthUI(auth);
    uiInstance.start("#firebaseui-auth-container", {
      signInOptions: [
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
        // Add other providers as needed
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false,
      },
    });
  });

  onDestroy(() => {
    uiInstance.reset();
    unsubscribe();
  });

  function signOut() {
    auth.signOut();
  }
</script>

{#if user}
  <button on:click={signOut}>Hello {user.displayName || 'Oscar'}!</button>
{:else}
  <div id="firebaseui-auth-container"></div>
{/if}

