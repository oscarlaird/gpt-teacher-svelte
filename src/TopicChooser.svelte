<script>
  import { onMount } from 'svelte';
  import TopicTile from './TopicTile.svelte';

  export let units;
  export let topics;
  export let allow_all_units = true;
  export let allow_all_topics = true;
  const all_unit  =  {id: -1, name: 'ALL'}
  const all_topic = {id: -1, unit_id: null, overview: null, name: 'ALL', image_name: null}
  let units_with_all = [all_unit].concat(units)
  let selectedUnit = -1;
  $: topics_in_unit = topics.filter(topic => topic.unit_id===selectedUnit);
  $: topics_with_all = [all_topic].concat(topics_in_unit)
  console.log('selected unit: ', selectedUnit);
  console.log('topics_in_unit:', topics_in_unit);
  console.log('topics_with_all:', topics_with_all);

</script>

<select bind:value={selectedUnit}>
	{#each (allow_all_units ? units_with_all : units) as unit}
		<option value={unit.id}>{unit.name}</option>
	{/each}
</select>

{#if selectedUnit.id !== -1}
<div class="topics-container">
  {#each (allow_all_topics ? topics_with_all : topics_in_unit)  as topic}
	  <TopicTile {topic} />
  {/each}
</div>
{/if}

<style>
  .topics-container {
    margin-top: 20px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-items: center;
  }
</style>

