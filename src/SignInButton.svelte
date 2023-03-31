<!-- SignInButton.svelte -->
<script>
  import './global.css';
  import { push } from "svelte-spa-router";
  import { auth } from "./firebaseApp";
  import { onMount } from "svelte";

  export let userData = null;

  onMount(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        userData = {
          name: user.displayName,
          // ...other user data as needed
        };
      } else {
        // User is signed out
        userData = null;
      }
    });

    // Cleanup the observer when the component is destroyed
    return () => {
      unsubscribe();
    };
  });

  function signIn() {
    push("/signin");
  }

  function signOut() {
    auth.signOut();
  }
</script>

{#if userData}
  <button on:click={signOut}>{userData.name} | Sign out</button>
{:else}
  <button on:click={signIn}>Welcome! | Sign in</button>
{/if}

<style>
  button {
    cursor: pointer;
    font-size: 2rem;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
  }
</style>

