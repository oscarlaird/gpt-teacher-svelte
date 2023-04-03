<!-- src/Article.svelte -->
<script>
  import './global.css';
  import ActivityButtons from './ActivityButtons.svelte';
  import ActivityLogger from './ActivityLogger.svelte';
  import { topics } from './cached_api.js';
  import { chosenSubject } from './stores.js';
  export let params = {}; // filled in from the url

  console.log(JSON.stringify(params))
  $: topic = $topics.find(t => t.id === parseInt(params.topic_id))
  $: console.log('topic: ', topic)
  
</script>

<style>
  .article-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 2px solid black;
  }

  .overview {
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 80px;
  }

  .overview b {
	  color: var(--secondary-color);
  }
  h1 {
	  color: var(--primary-color);
  }
</style>


<div class="article-container">
<ActivityButtons hideArticle={true} params={params} {topic} />
{#if topic}
<img src={`/images/${$chosenSubject.short_name}/${topic.image_name}`} alt={topic.title} />
  <h1> {topic.name} </h1>
  <div class="overview" >
    {@html topic.overview}
  </div>
<ActivityLogger params={params} activity_type=article />
{/if}
</div>


