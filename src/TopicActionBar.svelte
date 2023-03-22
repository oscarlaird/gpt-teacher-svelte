<script>
  import { push } from 'svelte-spa-router';
  export let params = {};
  export let topic;

  const goBack = () => {
    push('/');
  };

  const addFlashcards = () => {
    console.log('Add flashcards functionality goes here');
  };

  const takeQuiz = () => {
	  push(`/quiz/${topic.id}`)
  };
</script>

<div class="topic-action-bar">
  <button on:click={goBack}>← Back</button>
  <button on:click={addFlashcards}>Add Flashcards ({topic.flashcard_count})</button>
  <button on:click={takeQuiz}>Take Quiz ({topic.quiz_count})</button>
</div>

