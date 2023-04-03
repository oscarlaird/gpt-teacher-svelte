<!-- Header.svelte -->
<script>
  import './global.css';
  import SignInButton from "./SignInButton.svelte";
  import SubjectChooser from "./SubjectChooser.svelte";
  export let userData;
</script>

<header>
  <SubjectChooser />
  <SignInButton bind:userData />
</header>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    color: var(--secondary-color);
  }
</style>
