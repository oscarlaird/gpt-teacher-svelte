<!-- FlashcardReview.svelte -->
<script>
	import { swipe } from 'svelte-gestures';
	import Flashcard from './Flashcard.svelte';
	import ActivityLogger from './ActivityLogger.svelte';
	import ActivityButtons from './ActivityButtons.svelte';

	import { topics, cards as all_cards } from './cached_api.js';
	export let params = {};
	const uid = parseInt(params.unit_id);
	const tid = parseInt(params.topic_id);
        $: chosen_topics = uid === -1 ? $topics.map(t => t.id) :
                             tid === -1 ? $topics
                              .filter(t => t.unit_id === uid)
                              .map(t => t.id) :
                            [tid];
	console.log('all cards ', $all_cards);
	$: cards = $all_cards
			      .filter(c => chosen_topics.includes(c.topic_id))
			      .sort(() => Math.random() - 0.5);

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

	function handleSwipe (event) {
		const direction = event.detail.direction;
		if (direction==='right') {
			prevCard();
		} else if (direction==='left') {
			nextCard();
		};
	}

	function handleKeypress (event) {
		if (event.key === ' '){
			flipCard();
		} else if (event.keyCode===37) {
			prevCard();
		} else if (event.keyCode===39) {
			nextCard();
		}
	}

</script>

<style>
  .flashcard-review {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .progress-bar {
    width: 50%;
    height: 40px;
    border-radius: 20px;
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    position: relative;
  }

.progress-bar-inner {
  height: 100%;
  background-color: var(--secondary-color);
  border-radius: 20px;
  min-width: 20px;
  float: left;
}

.progress-text {
	font-size: 2rem;
	margin: 1rem;
}

button {
  border-radius: 3px;
  padding: 0.25rem 0.5rem;
  margin: 10px;
  font-size: 1.5rem;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}


</style>

<ActivityButtons params={params} hideFlashcards={true} />
{#if currentCard}
<div class="flashcard-review"
     use:swipe={{timeframe:250, minSwipeDistance: 50}}
     on:swipe={handleSwipe}
     on:keydown={handleKeypress}
     tabindex="0"
     >
	<!-- rerender the component when currentCard changes -->
	{#key currentCard}
		<Flashcard
				question={currentCard.question}
				answer={currentCard.answer}
				bind:flipped
		/>
	{/key}
  <div class="progress-bar">
	  <div class="progress-bar-inner" style:width={percentage} />
  </div>
  <div class='progress-text'>{progress}</div>
  <div>
    <button on:click="{prevCard}">Previous</button>
    <button on:click="{flipCard}">Flip</button>
    <button on:click="{nextCard}">Next</button>
  </div>
</div>
<ActivityLogger activity_type=cards params={params} />
{/if}

