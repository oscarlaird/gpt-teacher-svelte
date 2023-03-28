<!-- SignInButton.svelte -->
<script>
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
  <span>Hello, {userData.name} |</span>
  <button on:click={signOut}>Sign out</button>
{:else}
  <span>Hello, Guest | </span>
  <button on:click={signIn}>Sign in</button>
{/if}

<style>
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
    color: #007bff;
  }
</style>

