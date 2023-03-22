<script>
  import { onMount } from 'svelte';
  import TopicActionBar from './TopicActionBar.svelte';
  export let params = {};
  let topic;

   const fetchTopicDetails = async (id) => {
   try {
      const response = await fetch(`http://api.vinca.study/get_topic_details/${id}`);
      return await response.json();
   } catch (error) {
      console.error('Error fetching topic details:', error);
   }
   };

   onMount(async () => {
      topic = await fetchTopicDetails(params.id);
   });
</script>

{#if topic}
<div class="topic-page">
  <img src={`/images/${topic.image_name}`} alt="{topic.name} image" />
  <h1>{topic.name}</h1>
  <TopicActionBar topic={topic} />
  <div bind:innerHTML={topic.overview} contenteditable="false"/>
  <TopicActionBar topic={topic} />
</div>
{:else}
	loading...
{/if}

<style>
  .topic-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .topic-page img {
    width: 100%;
    object-fit: cover;
  }

  .topic-page h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  .topic-page button {
    background-color: #ccc;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-right: 10px;
  }
</style>

