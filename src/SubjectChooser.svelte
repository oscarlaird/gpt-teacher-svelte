<!-- SignInButton.svelte -->
<script>
  import './global.css';
  import { subjects, chosenSubjectId } from './stores.js';

</script>

<select bind:value={$chosenSubjectId}>
	{#each subjects as subject}
		<option value={subject.id}>
		  {subject.long_name}
		</option>
	{/each}
</select>

<style>
  select {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    text-align-last: center;
    cursor: pointer;
    font-size: 0.75rem;
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    background-color: var(--background-color);
  }
</style>

