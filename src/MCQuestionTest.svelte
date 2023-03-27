<script>
	import MCQuestion from './MCQuestion.svelte'
	import { example_mc_questions } from './example_objects.js'
	const example_mc = example_mc_questions[0]
</script>

<MCQuestion questionObj={example_mc} />
