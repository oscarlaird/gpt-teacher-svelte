<script>
  import './global.css';
  import { onMount } from 'svelte';
  import ActivityButtons from './ActivityButtons.svelte';
  export let params;

  let timeRemaining = 120; // 2 minutes in seconds
  let timerInterval = null;

  export let numCorrect = 0;
  export let numAnswered = 0;
  $: numWrong = numAnswered - numCorrect;
  export let quizFinished = 0;
  let score = 0;

  onMount(() => {
    timerInterval = setInterval(() => {
      timeRemaining--;
      if (timeRemaining < 0) {
	quizFinished = true;
      }
    }, 1000);
  });


  $: if (quizFinished) {
	clearInterval(timerInterval);
	calc_score();
  }

  function calc_score() {
	  score = 10 * (numCorrect - 3*numWrong);
	  score = score<0 ? 0 : score;
  }

  $: minutes_left = Math.floor(timeRemaining / 60);
  $: seconds_left = timeRemaining % 60;
  $: time_left_str = `${minutes_left}:${seconds_left.toString().padStart(2, '0')}`;
  $: time_message = timeRemaining<=0 ? 'Time expired!' :
	            quizFinished ? 'Quiz complete!' :
	            time_left_str;

</script>

{#if quizFinished}
<ActivityButtons params={params} hideQuiz={true} />
{/if}

<div class="quiz-header">
  <div class="timer">
    <strong>{time_message}</strong>
  </div>
  {#if quizFinished}
  <div class=score style:color={score ? 'green' : 'var(--secondary-color)'}>
    +{score}
  </div>
  {/if}
  <div>
    <span style="color: green">{numCorrect}</span>/{numAnswered}
  </div>
</div>


<style>
  .quiz-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    padding: 2rem;
    background-color: white;
    border-bottom: 1px solid #ccc;
    color: var(--secondary-color);
  }

</style>

