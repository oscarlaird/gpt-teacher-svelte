<!-- src/ArticleButtons.svelte -->
<script>
  export let topic;
</script>

<style>
  .buttons-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }

  button {
    background-color: #1a1a1a;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    transition-duration: 0.3s;
  }

  button:hover {
    background-color: #4c4c4c;
  }
</style>

<div class="buttons-container">
  <button on:click={() => console.log("Back clicked")}>Home</button>
  <button on:click={() => console.log("Flashcards clicked")}>Flashcards</button>
  <button on:click={() => console.log("Quiz clicked")}>Quiz</button>
</div>

