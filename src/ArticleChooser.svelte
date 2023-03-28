<script>
	import TopicChooser from './TopicChooser.svelte';
	import { example_units, example_topics } from './example_objects.js';
	import { chosenTopic } from './stores.js';
	import { push } from 'svelte-spa-router';
        function onChoose(event) {
		// const chosen_topic = event.detail.topic;
		chosenTopic.set( event.detail.topic );
		console.log($chosenTopic, ' is the chosen topic');
		push('/article');
	}
</script>

<TopicChooser units={example_units} topics={example_topics} allow_all_units={false} allow_all_topics={false} on:choose={onChoose} />
