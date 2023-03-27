<script>
	import { example_topics } from './example_objects.js';
	import Article from './Article.svelte';
	const example_topic = example_topics[0]
</script>

<Article topic={example_topic} />
