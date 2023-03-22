<script>
  import { onMount } from 'svelte';
  import { pop } from 'svelte-spa-router';
  import QuizActionBar from './QuizActionBar.svelte';
  import MCQuestion from './MCQuestion.svelte';
  export let params = {};

  let questions = [];
  let score = 0;
  let completedQuestions = 0;
  $: showContinue = (questions.length === completedQuestions)

  const fetchMCQuestions = async (id) => {
    try {
      const response = await fetch(`http://api.vinca.study/get_mc_questions/${id}`);
      const data = await response.json();
      return data.map(question => ({ ...question, answers: JSON.parse(question.answers) }))
    } catch (error) {
      console.error('Error fetching multiple choice questions:', error);
    }
  };

  onMount(async () => {
    questions = await fetchMCQuestions(params.id);
  });
</script>

<QuizActionBar num_correct={score} num_answered={completedQuestions} />

{#each questions as question, index}
<MCQuestion
question={question.question}
answers={question.answers}
correctAnswerIndex={question.correct}
questionIndex={index}
/>
{/each}


<style>
  .result {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
</style>
