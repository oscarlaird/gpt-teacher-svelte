<!-- TopicChooser.svelte -->
<script>
	import './global.css';
  import { onMount } from 'svelte';
  import TopicTile from './TopicTile.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function onChoose(event) {
    dispatch('choose', event.detail);
  }

  export let units = [];
  export let topics = [];
  const all_unit = { id: -1, name: 'ALL UNITS' };
  const all_topic = {
    id: -1,
    unit_id: null,
    overview: null,
    name: 'ALL TOPICS',
    image_name: 'all.jpg',
  };
  let units_with_all = [all_unit].concat(units);
  export let selectedUnit = 1; // Set the default value of selectedUnit to the first unit
  $: topics_in_unit = topics.filter((topic) => topic.unit_id === selectedUnit);
  $: topics_with_all = [all_topic].concat(topics_in_unit);
  // $: console.log('topics: ', topics);
  // $: console.log('selected unit: ', selectedUnit);
  // $: console.log('topics_in_unit:', topics_in_unit);
  // $: console.log('topics_with_all:', topics_with_all);
</script>

<select bind:value={selectedUnit}>
	{#each units_with_all as unit}
		<option value={unit.id}>{unit.name}</option>
	{/each}
</select>

<div class="topics-container">
  {#each topics_with_all as topic}
	<div class=topics-container-item>
	  <TopicTile topic={topic} on:choose={onChoose} />
	</div>
  {/each}
</div>

<style>
  .topics-container {
    margin-top: 20px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px;
    justify-items: center;
  }
  .topics-container > :first-child {
	  grid-column: 1 / -1;
  }
  .topics-container-item {
	  width: 100%;
	  height: 100%;
  }
  select {
	  width: 100%;
	  padding: 10px;
	  border-radius: 5px;
	  background-color: #fff;
	  font-size: 24px;
	  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	  border-color: var(--secondary-color);
	  color: var(--secondary-color);
  }
</style>

