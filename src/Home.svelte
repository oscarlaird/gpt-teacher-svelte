<!-- Home.svelte -->
<script>
  import TopicChooser from './TopicChooser.svelte';
  import Header from "./Header.svelte";
  import About from './About.svelte';
  import ActivityLog from "./ActivityLog.svelte";
  import Commento from "./Commento.svelte";
  import { push } from "svelte-spa-router";
  import ImageButton from './ImageButton.svelte';
  import { chosenSubjectId, chosenUnit, chosenTopic } from './stores.js';
  let activity_buttons = [
    {
      "activity": "article",
      "text": "Read",
      "background_image": "article.jpg"
    },
    {
      "activity": "flashcards",
      "text": "Cards",
      "background_image": "cards.jpg"
    },
    {
      "activity": "quiz",
      "text": "Quiz",
      "background_image": "quiz.jpg"
    },
  ];  

  let subject = "AP US History";
  let userData;

</script>

<div class=home-container>
<Header bind:userData subject={subject} />

<div class="buttons-container">
	{#each activity_buttons as a}
		<ImageButton 
		         	on:click={() => push(`/${a.activity}/${$chosenUnit}/${$chosenTopic}`)}
	              text={a.text}
		      background_image={a.background_image}
		/>
	{/each}
</div>

<TopicChooser bind:chosen_uid={$chosenUnit}
	      bind:chosen_tid={$chosenTopic} />

<hr>


{#if userData}
  <ActivityLog />
{/if}
</div>
<hr>
<About/>
<hr>
{#key chosenSubjectId}
<Commento />
{/key}

<style>
  hr {
	  margin: 20px 0;
  }
  .buttons-container {
    height: min(20vh, 200px);
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Default to two columns on mobile */
    gap: 0.5rem; /* Remove gap on mobile */
    margin: 0 0;
  }

  /* Media query for desktop screen size */
  @media (min-width: 768px) { /* Adjust this value based on the breakpoint you consider for desktop */
    .buttons-container {
      grid-template-columns: repeat(3, 1fr); /* 3 columns on desktop */
    }
  }

</style>

