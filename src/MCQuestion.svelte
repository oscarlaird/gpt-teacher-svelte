<script>
  export let question;
  export let answers;
  export let correctAnswerIndex;
  export let questionIndex;

  let selectedAnswer = null;
  let isAnswered = false;

  const selectAnswer = (index) => {
    if (!isAnswered) {
      selectedAnswer = index;
      isAnswered = true;
    }
  };
</script>

<div class="mc-question">
  <p>{question}</p>
  <ul>
    {#each answers as answer, index}
      <li
        class:correct={isAnswered && index === correctAnswerIndex}
        class:wrong={isAnswered && index === selectedAnswer && index !== correctAnswerIndex}
        on:click={() => selectAnswer(index)}
      >
        {answer}
      </li>
    {/each}
  </ul>
</div>

<style>
  .mc-question ul {
    list-style-type: none;
    padding: 0;
  }

  .mc-question li {
    cursor: pointer;
    padding: 5px 10px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .mc-question li.correct {
    background-color: #90ee90;
  }

  .mc-question li.wrong {
    background-color: #ffcccb;
  }
</style>

