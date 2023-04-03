<script>
function applyPermutation(arr, perm) {
  const result = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    result[perm[i]] = arr[i];
  }

  return result;
}
// Example usage:
// const originalArray = ['a', 'b', 'c', 'd', 'e'];
// const permutation = [3, 0, 4, 1, 2];
// const permutedArray = applyPermutation(originalArray, permutation);
// 
// console.log(permutedArray); // Output: ['b', 'd', 'e', 'a', 'c']
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let questionObj;
  const question = questionObj.question;
  console.log('parsing answers: ', questionObj.answers);
  const answers = JSON.parse(questionObj.answers);
  const explanation = questionObj.explanation;
  export let quizMode = true; // in quiz mode the selected answer is automatically confirmed
  export let correct;
  let confirmed = false;
  const permutation = Array.from({length: answers.length}, (_, i) => i).sort(() => Math.random() - 0.5); // random permutation
  const correctAnswerIndex = permutation[0]
  const shuffled_answers = applyPermutation(answers, permutation)


  let selectedAnswer = null;
  $: correct = selectedAnswer===correctAnswerIndex
  const selectAnswer = (index) => {
    if (!confirmed) {
      selectedAnswer = index;
      if (quizMode) {
	      confirmed = true
	      console.log('dispatch correct: ', selectedAnswer===correctAnswerIndex)
	      dispatch('confirmed', {correct: selectedAnswer===correctAnswerIndex})
      }
    }
  };
</script>

<div class="mc-question-wrapper">
<div class="mc-question">
  <p>{question}</p>
  <ul>
    {#each shuffled_answers as answer, index}
      <li
        class:correct={confirmed && index === correctAnswerIndex}
        class:wrong={confirmed && index === selectedAnswer && index !== correctAnswerIndex}
        class:chosen={!confirmed && index === selectedAnswer}
        on:click={() => selectAnswer(index)} >
        {answer}
	{#if confirmed && index===correctAnswerIndex && index!==selectedAnswer}
		<hr>
	        {explanation}
	{/if}
      </li>
    {/each}
  </ul>
</div>
</div>

<style>
  .mc-question p {
    font-size: 1.4em;
    padding: 5px 10px;
  }

  .mc-question ul {
    list-style-type: none;
    padding: 0;
  }

  .mc-question li {
    cursor: pointer;
    padding: 5px 10px;
    margin: 7px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1.2em;
  }

  .mc-question li.correct {
    background-color: #90ee90;
  }

  .mc-question li.wrong {
    background-color: #ffcccb;
  }

  .mc-question li.chosen {
	  background-color: yellow;
  }
  .mc-question-wrapper {
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  padding: 10px;
  width: 80vw;
  max-width: 900px;
  border-radius: 20px;
  margin: 10px;
  background-color: white;
  }

</style>

