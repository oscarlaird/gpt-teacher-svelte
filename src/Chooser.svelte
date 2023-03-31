<!-- Chooser -->
<script>
	import './global.css';
	import TopicChooser from './TopicChooser.svelte';
	// import { example_units, example_topics } from './example_objects.js';
	import { units, topics } from './cached_api.js';
	import { push } from 'svelte-spa-router';
	const capitalized = activity_type.charAt(0).toUpperCase() + activity_type.slice(1);

	let selectedUnit;
        function onChoose(event) {
		// const chosen_topic = event.detail.topic;
		const chosen_topic_id = event.detail.topic.id
		push(`/${activity_type}/${selectedUnit}/${chosen_topic_id}`);
	}
</script>

<div class=container>
	<h1> Choose {capitalized} </h1>
  <TopicChooser bind:selectedUnit units={units} topics={topics} on:choose={onChoose} />
</div>


<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}
	h1 {
		color: var(--secondary-color);
	}
</style>
