<!-- Header.svelte -->
<script>
  import SignInButton from "./SignInButton.svelte";
  export let subject;
  export let userData;
</script>

<header>
  <h1>{subject}</h1>
  <SignInButton bind:userData />
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }
</style>

