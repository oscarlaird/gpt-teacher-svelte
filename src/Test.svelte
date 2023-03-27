<script>
  import MCQuestion from './MCQuestion.svelte';
  export let questions;
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
  {#each questions as questionObj (questionObj.question)}
  <div >
	  <MCQuestion questionObj={questionObj} />
  </div>
  {/each}
</div>

