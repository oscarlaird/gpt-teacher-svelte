<script>
	import Flashcard from './Flashcard.svelte'
	export let cards;
	$: percentage = Math.round((currentCardIndex + 1) / cards.length * 100) + '%';
	let currentCardIndex = 0;
        $: progress = `${currentCardIndex + 1}/${cards.length}`;
	$: currentCard = cards[currentCardIndex]

	let flipped = false;

	  function nextCard() {
	    if (currentCardIndex < cards.length - 1) {
	      currentCardIndex++;
	      flipped = false;
	    }
	  }

	  function prevCard() {
	    if (currentCardIndex > 0) {
	      currentCardIndex--;
	      flipped = false;
	    }
	  }

	const flipCard = () => flipped = !flipped;


</script>

<style>
  .flashcard-review {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
  }

  .progress-bar {
    width: 200px;
    height: 20px;
    background-color: #ddd;
    border-radius: 10px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

.progress-bar-inner {
  height: 100%;
  background-color: lightgreen;
  border-radius: 10px;
  float: left;
}

button {
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
}


</style>

<div class="flashcard-review">
	<Flashcard question={currentCard.question} answer={currentCard.answer} bind:flipped />

  <div class="progress-bar">
	  <div class="progress-bar-inner" style:width={percentage}>{progress}</div>
  </div>

  <div>
    <button on:click="{prevCard}">Previous</button>
    <button on:click="{flipCard}">Flip</button>
    <button on:click="{nextCard}">Next</button>
  </div>
</div>





