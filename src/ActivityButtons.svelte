<!-- src/ArticleButtons.svelte -->
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
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border: 1px solid #ccc;
  }

  button {
    background-color: none;
    border: 4px solid var(--primary-color);
    color: var(--primary-color);
    padding: 0.5rem 1.5rem;
    text-align: center;
    font-size: 3rem;
    cursor: pointer;
    border-radius: 12px;
    transition-duration: 0.3s;
    margin: 20px;
  }

  button:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>

<div class="buttons-container" >
  <button on:click={() => push(`/home`)}>  Home</button>
  {#if !hideFlashcards}
  <button on:click={() => push(`/flashcards/${uid}/${tid}`)}> Flashcards</button>
  {/if}
  {#if !hideArticle}
  <button  on:click={() => push(   `/article/${uid}/${tid}`)}> Article</button>
  {/if}
  {#if !hideQuiz}
  <button  on:click={() => push(`/quiz/${uid}/${tid}`)}>  Quiz</button>
  {/if}
</div>

