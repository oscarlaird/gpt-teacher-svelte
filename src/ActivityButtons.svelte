<!-- src/ActivityButtons.svelte -->
<script>
  import './global.css';
  import { push } from 'svelte-spa-router';
  export let params = {} // must be passed from Article.svelte
  const uid = parseInt(params.unit_id);
  const tid = parseInt(params.topic_id);
  export let hideArticle = uid===-1 || tid===-1;
  console.log('params ', uid, tid, hideArticle);
  export let hideFlashcards = false;
  export let hideQuiz = false;
</script>

<style>
  .buttons-container {
    padding: 10px;
    margin: 0 0 0 0;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  button {
    background-color: none;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    padding: 0.25rem 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    cursor: pointer;
    transition-duration: 0.3s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }

  button:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>

<header class="buttons-container" >
  <button on:click={() => push(`/home`)}>  Home</button>
  {#if !hideFlashcards}
  <button on:click={() => push(`/flashcards/${uid}/${tid}`)}> Cards</button>
  {/if}
  {#if !hideArticle}
  <button  on:click={() => push(   `/article/${uid}/${tid}`)}> Article</button>
  {/if}
  {#if !hideQuiz}
  <button  on:click={() => push(`/quiz/${uid}/${tid}`)}>  Quiz</button>
  {/if}
</header>

