<script>
  import { pop } from 'svelte-spa-router';
  export let num_questions;
  export let num_answered;
  export let num_correct;

  const goBack = () => {
	  pop();
  };
</script>

<div class="quiz-action-bar">
  <button on:click={goBack}>Back</button>

</div>

