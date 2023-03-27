<!-- Quiz.svelte -->
<script>
  import MCQuestion from './MCQuestion.svelte';
  import { fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  export let questions;
  let numVisible = 1;
  $: visible_questions = questions.slice(-numVisible)
  function finish () {
	  //
  }
</script>

<style>
  .quiz-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
</style>

<div class="quiz-container">
  {#each visible_questions as questionObj (questionObj.question)}
  <div in:fade={{duration: 500}} animate:flip={{duration: 500}} >
	  <MCQuestion questionObj={questionObj} quizMode={true} on:confirmed={() => numVisible++} />
  </div>
  {/each}
</div>

