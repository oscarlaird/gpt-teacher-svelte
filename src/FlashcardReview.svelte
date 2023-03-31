<!-- FlashcardReview.svelte -->
<script>
	import { fly } from 'svelte/transition';
	import Flashcard from './Flashcard.svelte';
	import ActivityLogger from './ActivityLogger.svelte';
	import ActivityButtons from './ActivityButtons.svelte';

	import { topics, cards as all_cards } from './cached_api.js';
	export let params = {};
	const uid = parseInt(params.unit_id);
	const tid = parseInt(params.topic_id);
       const chosen_topics = uid === -1 ? topics.map(t => t.id) :
                             tid === -1 ? topics
                              .filter(t => t.unit_id === uid)
                              .map(t => t.id) :
                            [tid];
	const cards = all_cards
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
    margin: 40px;
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
  float: left;
}

.progress-text {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 2rem;
}

button {
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  margin: 10px;
  font-size: 3rem;
  color: var(--primary-color);
  border: 3px solid var(--primary-color);
}


</style>

<header>
<ActivityButtons params={params} hideFlashcards={true} />
</header>

<div class="flashcard-review" >
	<!-- rerender the component when currentCard changes -->
	{#key currentCard}
		<Flashcard
				question={currentCard.question}
				answer={currentCard.answer}
				bind:flipped
		/>
	{/key}

  <div class="progress-bar">
	  <div class="progress-bar-inner" style:width={percentage}>
		  <span class='progress-text'>{progress}</span>
	  </div>
  </div>

  <div>
    <button on:click="{prevCard}">Previous</button>
    <button on:click="{flipCard}">Flip</button>
    <button on:click="{nextCard}">Next</button>
  </div>
</div>

<ActivityLogger activity_type=cards params={params} />



