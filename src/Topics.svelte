<script>
  import { onMount } from 'svelte';
  import TopicTile from './TopicTile.svelte';

  let topics = [];

  const fetchTopics = async () => {
    try {
      const response = await fetch('http://api.vinca.study/get_topics');
      const data = await response.json();
      topics = data;
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  };

  onMount(fetchTopics);
</script>

<div class="topics-container">
  {#each topics as topic}
	  <TopicTile {topic} />
  {/each}
</div>

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

