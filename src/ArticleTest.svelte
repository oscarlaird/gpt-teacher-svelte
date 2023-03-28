<script>
	import { example_topics } from './example_objects.js';
	import { chosenTopic } from './stores.js';
	import Article from './Article.svelte';
	const example_topic = example_topics[0];
	chosenTopic.set(example_topic);
</script>

<Article />
