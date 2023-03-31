<!-- TopicChooser.svelte -->
<script>
	import './global.css';
  import { onMount } from 'svelte';
  import { units, topics } from './cached_api.js';
  import TopicTile from './TopicTile.svelte';
  export let chosen_tid;
  export let chosen_uid;
  const all_unit = { id: -1, name: 'ALL UNITS' };
  const all_topic = {
    id: -1,
    unit_id: null,
    overview: null,
    name: 'ALL TOPICS',
    image_name: 'all.jpg',
  };
	
  let units_with_all = [all_unit].concat(units);
  $: topics_in_unit = topics.filter((topic) => topic.unit_id === chosen_uid);
  $: topics_with_all = topics_in_unit.concat([all_topic]);
  // $: console.log('topics: ', topics);
  // $: console.log('selected unit: ', chosen_uid);
  // $: console.log('topics_in_unit:', topics_in_unit);
  // $: console.log('topics_with_all:', topics_with_all);
</script>

<select bind:value={chosen_uid} on:change={() => {chosen_tid=-1;}} >
	{#each units_with_all as unit}
		<option value={unit.id}>
		{unit.id===-1 ? '' : `Unit ${unit.id}: `}
		{unit.name}
		</option>
	{/each}
</select>

<div class="topics-container">
  {#each topics_with_all as topic}
	<div class=topics-container-item>
	  <TopicTile topic={topic} bind:chosen_tid />
	</div>
  {/each}
</div>

<style>
  .topics-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, min(15vh, 180px));
    gap: 15px;
    justify-items: center;
  }
  .topics-container > :last-child {
	  grid-column: 1 / -1;
  }
  .topics-container-item {
	  width: 100%;
	  height: 100%;
  }
  select {
	  width: 100%;
	  border-radius: 1px;
	  background-color: #fff;
	  margin: 20px 0;
	  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	  border-color: var(--secondary-color);
	  color: var(--secondary-color);
  }
</style>

