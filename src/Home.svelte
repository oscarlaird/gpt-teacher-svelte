<!-- Home.svelte -->
<script>
  import Header from "./Header.svelte";
  import ActivityLog from "./ActivityLog.svelte";
  import { push } from "svelte-spa-router";
  import ImageButton from './ImageButton.svelte';

  let activity_buttons = [
    {
      "activity": "quiz",
      "text": "Quiz",
      "background_image": "moon_flag.jpg"
    },
    {
      "activity": "flashcards",
      "text": "Cards",
      "background_image": "washington_crossing.jpg"
    },
    {
      "activity": "article",
      "text": "Read",
      "background_image": "mlk.jpg"
    }
  ];  

  let subject = "AP US History";
  let userData;

</script>

<Header bind:userData subject={subject} />

<div class="buttons-container">
	{#each activity_buttons as a}
		<ImageButton
	              on:click={() => push(`/choose/${a.activity}`)}
	              text={a.text}
		      background_image={a.background_image}
		/>
	{/each}
</div>

{#if userData}
  <ActivityLog />
{/if}

<style>
  .buttons-container {
    height: min(20vh, 200px);
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Default to two columns on mobile */
    gap: 0; /* Remove gap on mobile */
    padding: 0; /* Remove padding on mobile */
    margin: 0 0;
  }

  /* Media query for desktop screen size */
  @media (min-width: 768px) { /* Adjust this value based on the breakpoint you consider for desktop */
    .buttons-container {
      grid-template-columns: repeat(3, 1fr); /* 3 columns on desktop */
      gap: 1rem; /* Add gap between items on desktop */
      padding: 1rem; /* Add padding on desktop */
    }
  }

</style>

