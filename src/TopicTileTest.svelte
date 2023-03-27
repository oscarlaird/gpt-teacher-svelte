<script>
	import { example_topics } from './example_objects.js';
	import TopicTile from './TopicTile.svelte';
	const example_topic = example_topics[0]
</script>

<TopicTile topic={example_topic} />
