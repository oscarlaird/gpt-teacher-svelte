<script>
  export let title;
  export let quizCount;
  export let flashcardCount;
  export let backgroundImageUrl;
</script>
<div class="topic-tile">
  <div class="topic-tile-left" style="background-image: url('/images/mesa_verde.jpg')">
    <h2>{title}</h2>
  </div>
  <div class="topic-tile-right">
    <button>Quiz ({quizCount})</button>
    <button>Add Flashcards ({flashcardCount})</button>
    <button>Overview</button>
  </div>
</div>
<style>
  .topic-tile {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  
  .topic-tile-left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    padding: 20px;
    color: #fff;
    font-size: 24px;
    background-size: cover;
    background-position: center;
  }
  
  .topic-tile-left h2 {
    margin: 0;
  }
  
  .topic-tile-right {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    background-color: #f5f5f5;
  }
  
  .topic-tile-right button {
    margin-right: 10px;
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
