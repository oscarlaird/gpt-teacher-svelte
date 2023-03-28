<!-- Home.svelte -->
<script>
  import Header from "./Header.svelte";
  import ActivityLog from "./ActivityLog.svelte";
  import { push } from "svelte-spa-router";

  let subject = "AP US History";
  let activities = []; // This should be fetched based on the user data, for now it's an empty array
  let userData;

  // Reactive statement to get userData from SignInButton
</script>

<Header bind:userData subject={subject} />

<div class="buttons-container">
  <button>Quiz</button>
  <button>Flashcards</button>
  <button on:click={() => push('/choose_article')} >Read</button>
  <button>Progress</button>
</div>

{#if userData}
  <ActivityLog {activities} />
{/if}

<style>
  .buttons-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 1rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  button {
    padding: 2rem;
    font-size: 1.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  @media (max-width: 767px) {
    .buttons-container {
      grid-template-columns: 1fr;
    }
  }
</style>

