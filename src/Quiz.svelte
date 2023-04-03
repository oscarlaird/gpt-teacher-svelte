<!-- Quiz.svelte -->
<script>
  import MCQuestion from './MCQuestion.svelte';
  import ActivityButtons from './ActivityButtons.svelte';
  import QuizHeader from './QuizHeader.svelte';
  import { fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { topics, mc as all_questions } from './cached_api.js';
  export let params = {};
  let quizFinished = false;
  const uid = parseInt(params.unit_id);
  const tid = parseInt(params.topic_id);
  const chosen_topics = uid === -1 ? $topics.map(t => t.id) :
                        tid === -1 ? $topics
                         .filter(t => t.unit_id === uid)
                         .map(t => t.id) :
                       [tid];
  $: questions = $all_questions
	              .filter(q => chosen_topics.includes(q.topic_id))
                      .sort(() => Math.random() - 0.5);
  console.log('chosen topics: ', chosen_topics)
  console.log('questions: ', questions)

  let numCorrect = 0;
  let numAnswered = 0;
  $: numVisible = numAnswered + 1;
	  
  $: visible_questions = questions.slice(-numVisible)
  function onConfirm (event) {
	  numAnswered++
	  if (event.detail.correct) {
		  numCorrect++
	  }
	  if (numAnswered===questions.length) {
		  quizFinished = true;
	  }
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

<QuizHeader params={params} quizFinished={quizFinished} numCorrect={numCorrect} numAnswered={numAnswered} />
{#if visible_questions}
<div class="quiz-container">
  {#each visible_questions as questionObj (questionObj.question)}
  <div in:fade={{duration: 500}} animate:flip={{duration: 500}} >
	  <MCQuestion questionObj={questionObj} quizMode={true} on:confirmed={onConfirm} />
  </div>
  {/each}
</div>
{/if}
