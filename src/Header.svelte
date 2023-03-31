<!-- Header.svelte -->
<script>
  import './global.css';
  import SignInButton from "./SignInButton.svelte";
  export let subject;
  export let userData;
</script>

<header>
  <h1>{subject}</h1>
  <h1>GPT TUTOR</h1>
  <SignInButton bind:userData />
</header>

<style>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    color: var(--secondary-color);
  }
</style>

