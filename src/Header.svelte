<!-- Header.svelte -->
<script>
  import './global.css';
  import SignInButton from "./SignInButton.svelte";
  export let subject;
  export let userData;
</script>

<header>
  <h3>AP US History</h3>
  <SignInButton bind:userData />
</header>

<style>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--secondary-color);
  }
</style>

