<!-- LoginButton.svelte -->
<script>
  import { onMount } from "svelte";
  import { auth } from "./firebaseApp.js";
  import { onAuthStateChanged, signOut } from "firebase/auth";

  let user = null;

  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      user = currentUser;
    });

    return () => {
      unsubscribe();
    };
  });

  async function signOutUser() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }
</script>

{#if user}
  <p>Hello {user.displayName || "Oscar"}!</p>
  <button on:click={signOutUser}>Sign out</button>
{:else}
  <a href="/#/signin">Sign in / Sign up</a>
{/if}

